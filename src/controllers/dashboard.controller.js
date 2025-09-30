import db from "../../config/db.js";

// Dashboard data
export const dashboardData = async (req, res) => {
  try {
    const studentCount = await db.query(`SELECT COUNT(*) FROM student_logs`);
    const teacherCount = await db.query(`SELECT COUNT(*) FROM teacher_logs`);
    const unidentifiedCount = await db.query(`SELECT COUNT(*) FROM unidentified_logs`);
    const zoneCount = await db.query(`SELECT COUNT(*) FROM zones WHERE is_active = true`);

    //Recent Student Logs
    const studentLogs = await db.query(`
      SELECT sl.id, s.name AS student_name, z.name AS zone_name,
             sl.entry_time, sl.exit_time
      FROM student_logs sl
      JOIN students s ON sl.student_id = s.id
      JOIN zones z ON sl.zone_id = z.id
      ORDER BY sl.entry_time DESC
      LIMIT 5
    `);

    //Recent Teacher Logs
    const teacherLogs = await db.query(`
      SELECT tl.id, t.name AS teacher_name, z.name AS zone_name,
             tl.entry_time, tl.exit_time
      FROM teacher_logs tl
      JOIN teachers t ON tl.teacher_id = t.id
      JOIN zones z ON tl.zone_id = z.id
      ORDER BY tl.entry_time DESC
      LIMIT 5
    `);

    //Recent Unidentified Logs
    const unidentifiedLogs = await db.query(`
      SELECT ul.id, u.id AS unidentified_id, z.name AS zone_name,
             ul.entry_time, ul.exit_time
      FROM unidentified_logs ul
      JOIN unidentified u ON ul.unidentified_id = u.id
      JOIN zones z ON ul.zone_id = z.id
      ORDER BY ul.entry_time DESC
      LIMIT 5
    `);

    // Zone Overview 
    const zoneOverview = await db.query(`
      SELECT z.name AS zone_name, COUNT(sl.id) AS active_students
      FROM zones z
      LEFT JOIN student_logs sl ON z.id = sl.zone_id AND sl.exit_time IS NULL
      GROUP BY z.name
      ORDER BY z.name
    `);

    //Final Response matches your frontend
    res.json({
      stats: {
        students: studentCount.rows[0].count,
        teachers: teacherCount.rows[0].count,
        unidentified: unidentifiedCount.rows[0].count,
        zones: zoneCount.rows[0].count,
      },
      recentActivity: studentLogs.rows,   //  your table on dashboard
      zoneOverview: zoneOverview.rows     //  Zone overview table
    });

  } catch (err) {
    console.error("Dashboard API error:", err);
    res.status(500).json({ error: "Failed to load dashboard" });
  }
};

export const dashboardpage = (req, res) => {
  res.render("dashboard/dashboard");
};
  export const studentsPage = (req, res) => {
    res.render("students/student");
  };
  
  export const teachersPage = (req, res) => {
    res.render("teachers/teachers");
  };
  
  export const zonesPage = (req, res) => {
    res.render("zones/zones");
  };
  
  export const logsPage = (req, res) => {
    res.render("logs/logs");
  };
  