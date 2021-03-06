const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    // Inserir dados

    proffyValue = {
        name: "Amarela Vermelha da Silva",
        avatar: "data:image/jpeg;base64,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",
        whatsapp: "12345678910",
        bio: "gasosa.",
        
    }

    classValue = {
        subject: 1,
        cost: "20",
        
    }

    classScheduleValues = [{
        weekday: 1,
        time_from: 720,
        time_to: 1220
    },
    {
        weekday: 0,
        time_from: 520,
        time_to: 1220
    }
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})
    // Consultar dados inseridos

    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    // Consultar as classes de um determinado professor
    // e trazer junto os dados do professor
     const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectClassesAndProffys)

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `)

    console.log(selectClassesSchedules)

})