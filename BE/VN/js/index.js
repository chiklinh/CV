var model = {
    profileInfo: {
        avatar: "./images/Untitled.png",
        fullName: "TRẦN VĂN CHÍ LINH",
        position: "Lập trình viên BackEnd",
        birthDay: "21/01/1995",
        phone: "0916.623.321",
        marriage: "Độc thân",
        email: "tranvanchilinh2101@gmail.com",
        phoneNumber: "0916.623321",
        address: {
            number: "Số 67/50/9/11 - KP8,",
            district: "đường 38, P.Hiệp Bình Chánh,",
            city: "Thủ Đức, Tp.HCM"
        },
        link: [
            {
                icon: "bxl-facebook-square",
                link: "",
                name: "Facebook",
                color: "blue"
            },
            {
                icon: "bxl-linkedin-square",
                link: "",
                name: "Linked",
                color: ""
            },
            {
                icon: "bxl-github",
                link: "",
                name: "GitHub",
                color: ""
            }
        ]
    },
    experience: [
        {
            time: "03/2019 - 07/2020",
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
                            taskName: "Tìm kiếm ứng viên (cơ bản, nâng cao)."
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
                },
                {
                    projectName: "ShigotoJP.com",
                    technology: "NodeJS, MongoDB, Azure, Bootstrap",
                    toolUsed: "VS Code, MongoDB Studio, Robo3T, Figma.com",
                    listTask: [
                        {
                            taskName: "Đọc luồng dữ liệu."
                        },
                        {
                            taskName: "Tham gia phân tích dữ liệu."
                        }
                    ],
                    evaludate: "Hoàn thành task trong thời hạn."
                },
            ]
        },
        {
            time: "09/2021 - hiện tại",
            companyName: "CÔNG TY CỔ PHẦN GIẢI PHÁP THANH TOÁN VIỆT NAM - VNPAY",
            position: "Lập trình viên Back End",
            projectJoin: [
                {
                    nameProject: "HDBank Landing Page",
                    isLink: "0", //0: false, 1:true
                    website: ""
                },
                {
                    nameProject: " Việt Á Bank MB BE",
                    isLink: "0", //0: false, 1:true
                    website: ""
                },
                {
                    nameProject: " Kiên Long Bank MB BE",
                    isLink: "0", //0: false, 1:true
                    website: ""
                },
                {
                    nameProject: " VietComBank MB BE",
                    isLink: "0", //0: false, 1:true
                    website: ""
                },
                {
                    nameProject: " Eximbank MB BE",
                    isLink: "0", //0: false, 1:true
                    website: ""
                },
                {
                    nameProject: " EximBank Omni MB BE",
                    isLink: "0", //0: false, 1:true
                    website: ""
                },
                {
                    nameProject: " BIDC MB BE",
                    isLink: "0", //0: false, 1:true
                    website: ""
                },
                {
                    nameProject: " HDBank MB BE",
                    isLink: "0", //0: false, 1:true
                    website: ""
                }
            ],
            projectJoinDetail: [
                {
                    projectName: "Tổng hợp",
                    technology: "ASP.Net MVC 5, ASP.Net Core, RESTfull API, Linq, Entity Framework, Angular, MINIO, Docker, nginx, CKEditor",
                    toolUsed: "Visual 2019, Toad for Oracle",
                    listTask: [
                        {
                            taskName: "Viết service gửi mail tự động."
                        },
                        {
                            taskName: "thực hiện các tính năng CRUD."
                        },
                        {
                            taskName: "Update/download file trên MinIO"
                        },
                        {
                            taskName: "Viết kịch bản cài đặt/update từng môi trường SIT, UAT, PILOT, LIVE"
                        },
                        {
                            taskName: "Kiểm tra tính năng vựa theo testcase trước khi bàn giao"
                        },
                        {
                            taskName: "phát triến mới các tính năng báo cáo theo nghiệp vụ của ngân hàng tương ứng"
                        },
                        {
                            taskName: "Thao tác, viết lệnh truy vấn, store dựa theo nghiệp vụ yêu cầu"
                        },
                        {
                            taskName: "Kiểm tra, chỉnh sửa lỗi khi phát sinh "
                        },
                        {
                            taskName: "Tham gia họp làm việc trực tiếp với phia ngân hàng để làm rõ nghiệp vụ, lỗi"
                        }
                    ],
                    evaludate: "Hoàn thành task trong thời hạn."
                }
            ]
        }
    ],
    education: [
        {
            time: "09/2015 - 10/2018",
            degree: "Bằng kỹ sư",
            specialized: "Ứng dụng phần mềm",
            school: "tại trường Cao đẳng nghề TP.HCM"
        },
        {
            time: "12/2021 - hiện tại",
            degree: "chưa hoàn thành",
            specialized: "Data Analyzing with Power BI ",
            school: "tại Datapot"
        },
        {
            time: "11/2021 - 12/2021",
            degree: "Chứng chỉ",
            specialized: "Quản lí thời gian và năng suất",
            school: "tại Agilearn - Digital Learning Platform"
        },
        {
            time: "11/2021 - 12/2021",
            degree: "Chứng chỉ",
            specialized: "Hoàn thành mọi việc với Kanban",
            school: "tại Agilearn - Digital Learning Platform"
        },
        {
            time: "11/2021 - 12/2021",
            degree: "Chứng chỉ",
            specialized: "Đột phá năng suất cá nhân",
            school: "tại Agilearn - Digital Learning Platform"
        }
    ],
    skills: [
        {
            icon: "bx bxl-html5",
            name: "HTML5",
            evaludate: "Tốt",
            isImage: "1",
            style: "color: #e93e30;"
        },
        {
            icon: "bx bxl-javascript",
            name: "Javascript",
            evaludate: "Tốt",
            isImage: "1",
            style: "color: #f7df1e;"
        },
        {
            icon: "images/icons/mongoDB.png",
            name: "MongoDB",
            evaludate: "Khá",
            isImage: "0",
            style: "color: #f7df1e;"
        },
        {
            icon: "images/icons/azue-icon.png",
            name: "Azure",
            evaludate: "Khá",
            isImage: "0",
            style: ""
        },
        {
            icon: "bxl-visual-studio",
            name: "VS Code",
            evaludate: "Khá",
            isImage: "1",
            style: "color: #23a7ea;"
        },
        {
            icon: "bxl-react",
            name: "React",
            evaludate: "Cơ bản",
            isImage: "1",
            style: "color: #e21b5f;"
        },
        {
            icon: "bxl-angular",
            name: "Angular",
            evaludate: "Khá",
            isImage: "1",
            style: "color: #e93e30;"
        },
        {
            icon: "images/icons/gitlab-icon.png",
            name: "GitLab",
            evaludate: "Khá",
            isImage: "0",
            style: "color: #e93e30;"
        },
        {
            icon: "images/icons/github-icon.png",
            name: "GitHub",
            evaludate: "Khá",
            isImage: "0",
            style: "color: #e93e30;"
        },
        {
            icon: "images/icons/SQL-ICON.jpg",
            name: "SQL",
            evaludate: "Khá",
            isImage: "0",
            style: "color: #e93e30;"
        },
        {
            icon: "images/icons/oracle-icon.png",
            name: "ORACLE",
            evaludate: "Khá",
            isImage: "0",
            style: "color: #e93e30;"
        }
    ],
    language: [
        {
            code: "EN",
            name: "Tiếng Anh",
            achievements: "[B2]",
            isImage: "1",
            style: "color: #e93e30;; background-color: blue;"
        },
        {
            code: "JP",
            name: "Tiếng Nhật",
            achievements: "[B2]",
            isImage: "1",
            style: "color: white; background-color: red;"
        }
    ],
    interests: [
        {
            icon: "bx bx-code-alt",
            name: "Coding",
            isImage: "1"
        },
        {
            icon: "bx bx-cycling",
            name: "Cycling",
            isImage: "1"
        }
    ]
}
// alert(model.profileInfo.fullName)

function getElementById(id) {
    return document.getElementById(id);
}


function loadProfileInfo() {
    var profileInfoModel = model.profileInfo;
    getElementById('fullname').innerHTML = profileInfoModel.fullName;
    getElementById('position').innerHTML = profileInfoModel.position;
    getElementById('birthday').innerHTML = profileInfoModel.birthDay;
    getElementById('marriage').innerHTML = profileInfoModel.marriage;
    getElementById('email').innerHTML = profileInfoModel.email;
    getElementById('phone').innerHTML = profileInfoModel.phone;

    var address = `<span>${profileInfoModel.address.number}</span>
    <span>${profileInfoModel.address.district}</span>
    <span>${profileInfoModel.address.city}</span>`;
    getElementById('address').innerHTML = address;

    var contentSocialMedia = "";
    console.log(profileInfoModel.link)
    profileInfoModel.link.forEach(e => {
        contentSocialMedia += `
        <a href="${e.link.length > 0 ? e.link : ''}" target="_blank">
        <i class='bx ${e.icon}' ${e.color.length > 0 ? 'style="color:' + e.color + '"' : ""}></i></a>`
    });
    getElementById('social-media').innerHTML = contentSocialMedia
}

function loadWorkExperience() {
    var lstExperience = model.experience;
    var contentExperience = "";
    console.log(lstExperience)
    lstExperience.forEach(e => {
        contentExperience += `
        <div class="cv-item-content">
                <div class="date"><i>${e.time}</i></div>
                <div class="description">
                    <div class="company-name"><strong>${e.companyName.toLocaleUpperCase()}</strong></div>
                    <div class="position">
                        <label><i class='bx bxs-user-account'></i>Vị trí:</label>
                        <span>${e.position}</span>
                    </div>
                    <div class="project-join">
                        <label> <i class='bx bxs-wallet'></i>Dự án tham gia:</label>
                        <span>${loadProjectJoin(e.projectJoin)}</span>
                    </div>
                    ${loadProjectJoinTask(e.projectJoinDetail)}
                </div>
            </div> `
    })
    return contentExperience;
}

function loadProjectJoin(lstProjectJoin) {
    var contentProjectJoin = "";
    lstProjectJoin.forEach(e => {
        contentProjectJoin += `<a href="${e.website}" target="_blank"><i> ${e.nameProject} </i></a>,`
    })
    return contentProjectJoin;
}

function loadProjectJoinTask(data) {
    var contentTask = '';
    data.forEach(e => {
        contentTask += `
        <div class="project-join-detail">
            <div class="project-name cv-item-titel">
                <h2>${e.projectName}</h2>
                <div class="line"></div>
            </div>
            <div class="integrated-technology">
                <label> <i class='bx bx-atom'></i>Công nghệ tích hợp:</label> <br>
                <span>${e.technology}</span>
            </div>
            <div class="tool-used">
                <label><i class='bx bxs-category'></i>Công cụ sử dụng:</label> <br>
                <span> ${e.toolUsed}</span>
            </div>
            <div class="project-task">
                <label for=""><i class='bx bx-task'></i>Task chính thực hiện:</label>
                <div class="list-task">
                    <ul>
                         ${loadListTask(e.listTask)}
                    </ul>
                </div>
            </div>
        </div>`
    })
    return contentTask;
}

function loadListTask(data) {
    var contentListTask = "";
    data.forEach(e => {
        contentListTask += `<li>${e.taskName}</li>`
    })
    return contentListTask
}

function loadEducation() {
    var educationModel = model.education;
    var contentEducation = "";
    educationModel.forEach(e => {
        contentEducation += `
        <div class="cv-item-content">
            <div class="date">${e.time}</div>
            <div class="description">
                <p><strong>${e.degree}</strong> - ${e.specialized}</p>
                <p>${e.school}</p>
            </div>
        </div>`
    })
    return contentEducation;
}

function loadListSkill() {
    var skillModel = model.skills;
    var contentSkill = "";
    skillModel.forEach(e => {
        contentSkill += `
        <div class="item-with-logo">
            ${(e.isImage === "1")
                ? `<i class='bx ${e.icon}' ${e.style.length > 0 ? ' style="' + e.style + '"' : ''}></i>`
                : `<img src="${e.icon}" alt="">`
            }
            <label class="name-skill">${e.name}</label> - <label class="evaludate-skill">${e.evaludate}</label>
        </div>`;
    })
    return contentSkill;
}

function loadLangage() {
    var languageModel = model.language;
    var contentLanguage = '';
    languageModel.forEach(e => {
        contentLanguage += `
        <div class="item-with-logo">
            <div class="language" style="${e.style}">${e.code}</div>
            <label>English</label> - <label>[B2]</label>
        </div>`
    })
    return contentLanguage;
}

function loadInterest() {
    var interestModel = model.interests;
    var contentInterest = "";
    interestModel.forEach(e => {
        contentInterest += `
            <div class="item-with-logo">
                <i class='bx ${e.icon}'></i>
                <label>${e.name}</label>
            </div>`
    })
    return contentInterest;
}

loadProfileInfo();
getElementById('list-experience').innerHTML = loadWorkExperience()
getElementById('education').innerHTML = loadEducation();
getElementById('skill').innerHTML = loadListSkill()
getElementById('language').innerHTML = loadLangage()
getElementById('interest').innerHTML = loadInterest()

