select * from students;
select * from teachers;
select * from zones;
select * from student_logs;
select * from teacher_logs;
select * from unidentified_logs;
select * from unidentified;

SELECT COUNT(*) FROM students


INSERT INTO students (name, roll_no, email, image_url) VALUES
('Zeeshan', '221093', '221093@students.au.edu.pk', '/images/students/Zeeshan.jpg');

INSERT INTO teachers (name, email, department, image_url) VALUES
('Dr. Ayesha Noor', 'ayesha.noor@example.com', 'Computer Science', '/images/students/Zainab.jpg'),
('Prof. Hamza Rauf', 'hamza.rauf@example.com', 'Mathematics', '/images/students/Abdullah.jpg'),
('Dr. Farah Khan', 'farah.khan@example.com', 'Physics', '/images/students/Zeeshan.jpg');

INSERT INTO student_logs (student_id, zone_id, entry_time, exit_time) VALUES
(1, 1, '2025-09-20 09:00:00', '2025-09-20 10:30:00'),  -- Ali Khan in Library
(2, 2, '2025-09-20 09:15:00', '2025-09-20 11:00:00'),  -- Sara Ahmed in Lab 1
(3, 3, '2025-09-20 10:00:00', NULL);                   -- Bilal Hussain still in Lab 2

INSERT INTO teacher_logs (teacher_id, zone_id, entry_time, exit_time) VALUES
(1, 1, '2025-09-20 08:30:00', '2025-09-20 10:00:00'),  -- Dr. Ayesha in Library
(2, 4, '2025-09-20 09:00:00', NULL),                  -- Prof. Hamza in Classroom 3
(3, 2, '2025-09-20 11:00:00', NULL);                  -- Dr. Farah in Lab 1

INSERT INTO unidentified (detected_at,zone_id, image_url) VALUES
('2025-09-20 09:10:00',1,  '/images/unidentified/u1.jpg'),
('2025-09-20 10:45:00',2,  '/images/unidentified/u2.jpg'),
('2025-09-20 11:30:00', 3,  '/images/unidentified/u3.jpg');

INSERT INTO unidentified_logs (unidentified_id, zone_id, entry_time, exit_time) 
VALUES (1, 1, '2025-09-20 08:10:00', '2025-09-20 08:20:00');
INSERT INTO unidentified_logs (unidentified_id, zone_id, entry_time, exit_time) 
VALUES (1, 1, '2025-09-20 08:10:00', '2025-09-20 08:20:00');


INSERT INTO zones (name, is_active) VALUES
('Library', TRUE),
('Lab 1', TRUE),
('Lab 2', TRUE),
('Classroom 3', TRUE),
('Cafeteria', FALSE);

CREATE TABLE unidentified_logs (
    id SERIAL PRIMARY KEY,
    unidentified_id INT REFERENCES unidentified(id) ON DELETE CASCADE,
    zone_id INT REFERENCES zones(id) ON DELETE CASCADE,
    entry_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    exit_time TIMESTAMP
);
INSERT INTO unidentified_logs (unidentified_id, zone_id, entry_time,exit_time) 
VALUES (1, 1, '2025-09-20 09:10:00', NULL);


CREATE TABLE student_logs (
    id SERIAL PRIMARY KEY,
    student_id INT REFERENCES students(id) ON DELETE CASCADE,
    zone_id INT REFERENCES zones(id) ON DELETE CASCADE,
    entry_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    exit_time TIMESTAMP
);

CREATE TABLE teacher_logs (
    id SERIAL PRIMARY KEY,
    teacher_id INT REFERENCES teachers(id) ON DELETE CASCADE,
    zone_id INT REFERENCES zones(id) ON DELETE CASCADE,
    entry_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    exit_time TIMESTAMP
);
