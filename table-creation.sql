DROP TABLE IF EXISTS payments;
DROP TABLE IF EXISTS autoFeatures;
DROP TABLE IF EXISTS features;
DROP TABLE IF EXISTS rentals;
DROP TABLE IF EXISTS autos;
DROP TABLE IF EXISTS locations;
DROP TABLE IF EXISTS hours;
DROP TABLE IF EXISTS customers;
DROP FUNCTION updateLastUpdatedColumn();

CREATE TABLE IF NOT EXISTS customers (
	customerId UUID PRIMARY KEY DEFAULT gen_random_uuid(),
	firstName TEXT NOT NULL,
	lastName TEXT NOT NULL,
	email TEXT NOT NULL UNIQUE,
	phone TEXT,
	addressLine1 TEXT NOT NULL,
	addressLine2 TEXT,
	addressCity TEXT NOT NULL,
	addressState CHAR(2) NOT NULL,
	addressZipCode INTEGER NOT NULL,
	driverLicenseNumber TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS hours (
    hoursId SERIAL PRIMARY KEY,
    monday TEXT,
    tuesday TEXT,
    wednesday TEXT,
    thursday TEXT,
    friday TEXT,
    saturday TEXT,
    sunday TEXT,
    lastUpdated TIMESTAMP
);

CREATE TABLE IF NOT EXISTS locations (
    locationId SERIAL PRIMARY KEY,
    addressLine1 TEXT NOT NULL,
	addressLine2 TEXT,
	city TEXT NOT NULL,
	state CHAR(2) NOT NULL,
	zipCode INTEGER NOT NULL,
    phone TEXT,
    website TEXT,
    hoursId INTEGER references hours(hoursId)
);

CREATE TABLE IF NOT EXISTS autos (
	autoId SERIAL PRIMARY KEY,
	make TEXT NOT NULL,
	model TEXT NOT NULL,
	year SMALLINT NOT NULL,
	odometer INTEGER NOT NULL,
	lastOilChangeDate DATE,
	lastOilChangeOdometer INTEGER,
	licensePlateNo TEXT NOT NULL UNIQUE,
	vin TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS rentals (
	rentalId UUID PRIMARY KEY DEFAULT gen_random_uuid(),
	pickupLocation INTEGER references locations(locationId),
	dropOffLocation INTEGER references locations(locationId),
	pickupDatetime TIMESTAMP NOT NULL,
	dropOffDatetime TIMESTAMP NOT NULL,
	reservationDatetime TIMESTAMP NOT NULL,
	customerId UUID NOT NULL references customers(customerId),
	autoId INTEGER NOT NULL references autos(autoId)
);

CREATE FUNCTION updateLastUpdatedColumn()
RETURNS trigger AS $$
BEGIN
    NEW.last_updated = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER updateHoursTableLastUpdated
BEFORE UPDATE ON hours
FOR EACH ROW
EXECUTE FUNCTION updateLastUpdatedColumn();

CREATE TABLE IF NOT EXISTS features (
    featureId SERIAL PRIMARY KEY,
    name TEXT,
    description TEXT
);

CREATE TABLE IF NOT EXISTS autoFeatures (
    autoId INTEGER references autos(autoId),
    featureId INTEGER references features(featureId),
    value TEXT,
    PRIMARY KEY(autoId, featureId)
);

CREATE TABLE IF NOT EXISTS payments (
	paymentId UUID PRIMARY KEY DEFAULT gen_random_uuid(),
	rentalId UUID references rentals(rentalId),
	description TEXT,
	amount NUMERIC(7,2),
	method TEXT,
	paymentDate TIMESTAMP
);

INSERT INTO features (name, description) VALUES ('Exterior Color', 'Primary exterior paint color.');

INSERT INTO autos (
    make, 
    model, 
    year, 
    odometer, 
    lastOilChangeDate,
    lastOilChangeOdometer,
    licensePlateNo, 
    vin)
VALUES (
    'Toyota', 
    'Sienna',
    2022, 
    85943, 
    '2024-05-15',
    84231,
    'G5DTE3', 
    '4T1BF3EK3BU713744'
);

INSERT INTO customers (
    firstName,
    lastName,
    email,
    phone,
    addressLine1,
    addressCity,
    addressState,
    addressZipCode,
    driverLicenseNumber
) VALUES (
    'Linus',
    'Torvalds',
    'linus.torvalds@example.com',
    '555-123-4567',
    '123 Open Source St',
    'Paris',
    'TX',
    12345,
    'DL123456789'
);

INSERT INTO hours (
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday
) VALUES (
    '8:00 AM - 6:30 PM',
    '8:00 AM - 6:30 PM',
    '8:00 AM - 6:30 PM',
    '8:00 AM - 6:30 PM',
    '8:00 AM - 6:30 PM',
    '9:00 AM - 5:30 PM',
    '10:00 AM - 5:00 PM'
);

INSERT INTO locations (
    addressLine1,
    city,
    state,
    zipCode,
    phone,
    website,
    hoursId
) VALUES (
    '1234 Rydio Way',
    'Paris',
    'TX',
    75460,
    '903-555-1234',
    'https://google.com?q=rydio',
    1
);

SELECT rentalId, locations.addressLine1, dropOffLocation, pickupDateTime, autos.make, autos.model, customers.firstName, customers.lastName, email, driverLicenseNumber FROM rentals
JOIN customers
ON rentals.customerId = customers.customerId
JOIN autos
ON rentals.autoId = autos.autoId
JOIN locations
ON rentals.pickupLocation = locations.locationId;