var model = {
    profileInfo: {
        avatar: "./images/Untitled.png",
        fullName: "Trần Văn Chí Linh",
        position: "Lập trình viên Back End",
        email: "tranvanchilinh2101@gmail.com",
        phoneNumber: "0916.623321",
        address: {
            number: "Số 67/50/9/11 - KP8,",
            district: "đường 38, P.Hiệp Bình Chánh,",
            city: "Thủ Đức, Tp.HCM"
        },
        link: [
            {
                icon: "bx bxl-facebook-square",
                link: "",
                name: "Facebook"
            },
            {
                icon: "bx bxl-linkedin-square",
                link: "",
                name: "Linked"
            },
            {
                icon: "bx bxl-github",
                link: "",
                name: "GitHub"
            }
        ]
    },
    experience: [
        {
            date: "03/2019 - 07/2020",
            companyName: "CÔNG TY TNHH DỊCH VỤ VÀ CÔNG NGHỆ MINH ANH",
            position: "Lập trình viên Back End",
            projectJoin: [
                {
                    nameProject: " Jobee.vn",
                    isLink: "1", //0: false, 1:true
                    website: "www.jobee.vn"
                },
                {
                    nameProject: " ShigotoJP.com",
                    isLink: "1", //0: false, 1:true
                    website: "www.shigoto.com"
                }
            ],
            projectJoinDetail: [
                {
                    projectName: "Jobee.vn",
                    technology: "ASP.Net MVC 5, Linq, Entity Framework, MongoDB, Azure, JQuery, Bootstrap, Kendo, CKEditor",
                    toolUsed: "Visual 2019, MongoDB Studio, Robo3T, Figma.com",
                    listTask: [
                        {
                            taskName: "Lọc tin đăng tuyển dụng."
                        },
                        {
                            taskName: "ìm kiếm ứng viên (cơ bản, nâng cao)."
                        },
                        {
                            taskName: "Thiết kế giao diện CV ứng viên."
                        },
                        {
                            taskName: "Thiết kế giao diện đăng tin của nhà tuyển dụng."
                        },
                        {
                            taskName: "Thiết kế giao diện và xử lý dữ liệu bán dịch vụ(điểm)."
                        },
                        {
                            taskName: "Thực hiện những yêu cầu phát sinh ngoài chức năng"
                        }
                    ],
                    evaludate: "Hoàn thành task trong thời hạn."
                }
            ]
        }
    ],
    education: [
        {
            time: "09/2015-10/2018",
            degree: "Bằng kỹ sư",
            specialized: "Ứng dụng phần mềm",
            school: "tại trường Cao đẳng nghề TP.HCM"
        }
    ],
    skills: [
        {
            icon: "bx bxl-html5",
            name: "HTML5",
            evaludate: "Tốt"
        },
        {
            icon: "bx bxl-javascript",
            name: "Javascript",
            evaludate: "Tốt"
        }
    ],
    language: [
        {
            code: "EN",
            name: "English",
            achievements: "[B2]"
        }
    ],
    interests: [
        {
            icon: "bx bx-code-alt",
            name: "Coding"
        },
        {
            icon: "bx bx-cycling",
            name: "Cycling"
        }
    ]
}