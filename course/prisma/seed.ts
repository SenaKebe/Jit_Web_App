import { PrismaClient, UserSex } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ADMIN
  await prisma.admin.create({
    data: {
      id: "admin-1",
      username: "admin1",
    },
  });
  await prisma.admin.create({
    data: {
      id: "admin-2",
      username: "admin2",
    },
  });

  //  GRADES
  for (let i = 1; i <= 3; i++) {
    await prisma.grade.create({
      data: {
        level: i,
      },
    });
  }

  //TEACHER
  for (let i = 1; i <= 2; i++) {
    await prisma.teacher.create({
      data: {
        id: `teacher-${i}`,
        username: `teacher${i}`,
        name: `Teacher${i}`,
        surname: `Surname${i}`,
        email: `teacher${i}@example.com`,
        phone: `12345678${i}`,
        address: `Teacher Address ${i}`,
        img: `teacher${i}.png`,
        bloodType: "O+",
        sex: i % 2 === 0 ? "MALE" : "FEMALE",
      },
    });
  }

  // SUBJECTS
  const subjectNames = ["Mathematics", "Science", "History"];
  for (let i = 0; i < subjectNames.length; i++) {
    await prisma.subject.create({
      data: {
        name: subjectNames[i],
      },
    });
  }

  // CLASSES
  const classes = [];
  for (let i = 1; i <= 2; i++) {
    const classData = await prisma.class.create({
      data: {
        name: `Class ${String.fromCharCode(64 + i)}`,
        capacity: 25 + i * 5,
        grade: { connect: { level: i } },
        supervisor: { connect: { id: `teacher-${i}` } },
      },
    });
    classes.push(classData);
  }

  // LESSON
  const lessons = [];
  for (let i = 1; i <= 2; i++) {
    const startTime = new Date(`2023-10-24T0${i + 7}:00:00Z`);
    const endTime = new Date(startTime.getTime() + 60 * 60 * 1000);

    const lesson = await prisma.lesson.create({
      data: {
        name: `Lesson ${i}`,
        day: i % 2 === 0 ? "MONDAY" : "WEDNESDAY",
        startTime: startTime,
        endTime: endTime,
        subject: { connect: { name: subjectNames[i - 1] } },
        class: { connect: { id: classes[i - 1].id } },
        teacher: { connect: { id: `teacher-${i}` } },
      },
    });

    lessons.push(lesson);
  }

  //  EXAMS
  const exams = [];
  for (let i = 1; i <= 2; i++) {
    const exam = await prisma.exam.create({
      data: {
        title: `Exam ${i}`,
        startTime: new Date(`2023-11-10T10:00:00Z`),
        endTime: new Date(`2023-11-10T12:00:00Z`),
        lesson: { connect: { id: lessons[i - 1].id } },
      },
    });
    exams.push(exam);
  }

  // ASSIGNMENTS
  for (let i = 1; i <= 2; i++) {
    await prisma.assignment.create({
      data: {
        title: `Assignment ${i}`,
        startDate: new Date(`2023-10-2${i}`),
        dueDate: new Date(`2023-10-2${i + 3}`),
        lesson: { connect: { id: lessons[i - 1].id } },
      },
    });
  }

  // STUDENTS
  const students = [];
  for (let i = 1; i <= 2; i++) {
    const student = await prisma.student.create({
      data: {
        id: `student-${i}`,
        username: `student${i}`,
        name: `Student ${i}`,
        surname: `Surname${i}`,
        email: `student${i}@example.com`,
        phone: `123-456-789${i}`,
        address: `Address ${i}`,
        img: `https://example.com/student${i}.jpg`,
        bloodType: "O+",
        sex: "MALE",
        class: { connect: { id: classes[0].id } },
        grade: { connect: { level: 1 } },
        birthday: new Date("2005-06-15"),
      },
    });
    students.push(student);
  }

  //  RESULTS
  for (let i = 1; i <= 2; i++) {
    await prisma.result.create({
      data: {
        score: 80 + i * 5,
        student: { connect: { id: students[i - 1].id } },
        exam: { connect: { id: exams[i - 1].id } },
      },
    });
  }

  // ATTENDANCE
  for (let i = 1; i <= 2; i++) {
    await prisma.attendance.create({
      data: {
        date: new Date("2023-10-23"),
        present: i % 2 === 0,
        student: { connect: { id: students[i - 1].id } },
        lesson: { connect: { id: lessons[i - 1].id } },
      },
    });
  }

  // EVENTS
  await prisma.event.create({
    data: {
      title: "Parent-Teacher Meeting",
      description: "Quarterly meeting with parents",
      startTime: new Date("2023-11-15T14:00:00Z"),
      endTime: new Date("2023-11-15T16:00:00Z"),
      class: { connect: { id: classes[0].id } },
    },
  });

  //  ANNOUCEMENTS
  await prisma.announcement.create({
    data: {
      title: "School Holiday",
      description: "School will be closed next Monday",
      date: new Date("2023-10-25"),
      class: { connect: { id: classes[0].id } },
    },
  });

  console.log("✅ Seeding completed successfully!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
