const labels = [
    [
        {
            "label": "First Name",
            "placeholder": "John",
            "className": "span-md-2",
            "name": "firstName"
        },

        {
            "label": "Last Name",
            "placeholder": "Doe",
            "className": "span-md-2",
            "name": "lastName"

        }
    ],

    [
        {
            "label": "Phone Number",
            "placeholder": "0123456789",
            "className": "span-md-2",
            "name": "phoneNumber"
        },

        {
            "label": "email",
            "placeholder": "me@mail.com",
            "className": "span-md-2",
            "name": "email"
        }
    ], 

    {
        "header": "Education",
        "className": "form--header",
        "addButtonclassName": "material-icons symbol--button add",
        "removeButtonclassName": "material-icons symbol--button remove",
        "addSymbol": "add",
        "removeSymbol": "remove",
        "type": "education",
        "details": [
            {
                "label": "School",
                "placeholder": "School of Hard Knocks",
                "className": "span-md-3",
                "name": "school"
            },

            {
                "label": "Degree",
                "placeholder": "Bachelor of Science",
                "className": "span-md-3",
                "name": "degree"
            },
    
            {
                "label": "Major",
                "placeholder": "Computer Science",
                "className": "span-md-3",
                "name": "major"
            },
            
            {
                "label": "Years Attended",
                "placeholder": "2018-2020",
                "className": "span-md-3",
                "name": "attendance"
            }
        ]
    },

    {
        "header": "Work History",
        "className": "form--header",
        "addButtonclassName": "material-icons symbol--button add",
        "removeButtonclassName": "material-icons symbol--button remove",
        "addSymbol": "add",
        "removeSymbol": "remove",
        "type": "workHistory",
        "details": [
            {
                "label": "Company",
                "placeholder": "Microsoft",
                "className": "span-md-3",
                "name": "company"
            },
    
            {
                "label": "Title",
                "placeholder": "Computer Science",
                "className": "span-md-3",
                "name": "title"
            },
            
            {
                "label": "Employment Duration",
                "placeholder": "2018-2020",
                "className": "span-md-3",
                "name": "duration"
            },

            {
                "label": "Job Description",
                "placeholder": "description",
                "className": "form--textarea span-lg",
                "name": "jobInfo"
            }
        ] 
    }

]

export default labels