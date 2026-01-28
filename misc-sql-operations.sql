-- SELECT * FROM oilChanges WHERE autoId = '56' ORDER BY changeDate DESC LIMIT 1;

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

ALTER TABLE autos
ALTER COLUMN lastOilChangeDate TYPE DATE;

DELETE FROM autos WHERE autoId = 1;

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
    hours
) VALUES (
    '1234 Rydio Way',
    'Paris',
    'TX',
    75460,
    '903-555-1234',
    'https://google.com?q=rydio',
    1
);

INSERT INTO rentals (
    pickupLocation,
    dropOffLocation,
    pickupDatetime,
    dropOffDatetime,
    reservationDatetime,
    customerId,
    autoId
) VALUES (
    1,
    1,
    '2026-02-13 11:30:00',
    '2026-02-16 08:00:00',
    NOW(),
    (SELECT customerId FROM customers LIMIT 1),
    1
);

SELECT * FROM rentals
JOIN customers
ON rentals.customerId = customers.customerId;