import { doc, getDoc } from "firebase/firestore";
import React, { useState, useEffect } from 'react';
import { auth, firestore } from '../firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const fetchUserData = async () => {
    try {
        const user = auth.currentUser;

        if (user) {
            const db = firestore;
            const docRef = doc(db, "userList", user.uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                // Save data to AsyncStorage
                try {
                    await AsyncStorage.setItem('userData', JSON.stringify(docSnap.data()));
                    return docSnap.data();
                } catch (error) {
                    console.error('JSON string is invalid:', error.message);
                }
            }
        } else {
            console.log("No user is currently signed in.");
        }
    } catch (error) {
        console.error("Error fetching document:", error);
    }
    return null;
};
// fetchUserData();

function isValidJson(jsonString) {
    try {
        JSON.parse(jsonString);
        return true;
    } catch (error) {
        return false;
    }
}

export const completeURIforImage = (imageURI) => {
    if (imageURI === null || imageURI === undefined || imageURI === '') {
        return require('../assets/images/placeholder.jpg');
    } else {
        return { uri: `${imageURI}` };
    }
}

/**
 * 
 * @param {string} keyname : tên key của AsyncStorage
 * @returns : lấy dữ liệu từ AsyncStorage
 */
export const retrieveData = async (keyname) => {
    try {
        const value = await AsyncStorage.getItem(keyname);
        if (value !== null) {
            if (isValidJson(value)) {
                console.log(`Retrieved data for keyname ${keyname}:`, value);
                return JSON.parse(value);
            } else {
                console.error(`retrieveData() Invalid JSON string for keyname ${keyname}:`, value);
            }
        } else {
            console.log(`Data not found for keyname ${keyname}.`);
        }
    } catch (error) {
        console.error('retrieveData() Error retrieving data:', error);
    }
}

export default DATA = () => {
    const placeholderUserData = {
        id: 'u1',
        name: "Nguyễn Văn A",
        dob: "01/01/2000",
        sex: "Nam",
        email: "blaaaaa@gmail.com",
        phone: "0123456789",
        address: "Hà Nội",
        avatar: require('../assets/images/placeholder.jpg'),
        intro: "Tôi là Nguyễn Văn A, tôi đến từ Hà Nội",
        major: "IT",
        exp: [
            {
                from: "01/01/2021",
                to: "01/01/2021",
                company: "Công ty TNHH ABC",
            },
            {
                from: "01/01/2021",
                to: "01/01/2021",
                company: "Công ty TNHH ABC",
            },
            {
                from: "01/01/2021",
                to: "01/01/2021",
                company: "Công ty TNHH ABC",
            },
        ],
        disable: ["KT nghe",],
        image: [
            require('../assets/images/placeholder.jpg'),
            require('../assets/images/placeholder.jpg'),
            require('../assets/images/placeholder.jpg'),
        ],
        joinDate: "01/01/2021",
        education: ['thpt', 'đại học'],
        wishness: 'bla bla bla',
        jobSave: ['j3', 'j7'],
        skill: ['skill1', 'skill2', 'skill3'],
        isAvailable: true,
        letCompanyContact: true,
        jobAttempt: ['j1', 'j2',],
        followCompany: ['c1', 'c2',],
        companyViewCount: 2,
    }
    const [currentUser, setCurrentUser] = React.useState(placeholderUserData);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await retrieveData('userData');
                setCurrentUser(data);
            } catch (error) {
                console.error("Error retriveing data:", error);
            }

        };
        fetchData();
    }, []);

    let company = [
        {
            id: 'c1',
            nameCompany: "Nhà sách Giáo Dục",
            majorCompany: "Giáo Dục",
            fullUnitCompany: "CÔNG TY TRÁCH NHIỆM HỮU HẠN MỘT THÀNH VIÊN NHÀ XUẤT BẢN GIÁO DỤC VIỆT NAM",
            addressCompany: "Hà Nội",
            fullAddressCompany: 'Số 81 Trần Hưng Đạo - Hoàn Kiếm - Hà Nội',
            introCompany: "Nhà xuất bản Giáo dục Việt Nam (trước đây là Nhà xuất bản Giáo dục) trực thuộc Bộ Giáo dục và Đào tạo, được thành lập ngày 01 tháng 6 năm 1957. Nhà xuất bản Giáo dục Việt Nam có nhiệm vụ tổ chức biên soạn, biên tập, in, phát hành sách giáo khoa và các sản phẩm giáo dục phục vụ nghiên cứu, giảng dạy, học tập của các ngành học, bậc học; giúp Bộ Giáo dục và Đào tạo chỉ đạo công tác thiết bị giáo dục và thư viện trường học trên toàn quốc.",
            logoCompany: require('../assets/images/placeholder.jpg'),
            imageCompany: [
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
            ],
            telCompany: "02438221386",
            emailCompany: "veph@nxbgd.vn",
            websiteCompany: "https://www.nxbgd.vn",
            jobIdList: ['j1']
        },
        {
            id: 'c2',
            nameCompany: "Haga Smartech",
            majorCompany: "CNTT",
            fullUnitCompany: "Công ty TNHH TM DV",
            addressCompany: "TP.HCM",
            fullAddressCompany: '26 Xuân Thủy, Thảo Điền, Quận 2, Thành phố Hồ Chí Minh',
            introCompany: "Cửa hàng bán linh kiện điện tử",
            logoCompany: require('../assets/images/placeholder.jpg'),
            imageCompany: [
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
            ],
            telCompany: "0906 606 466",
            emailCompany: "hagasmartech@gmail.com",
            websiteCompany: "https://hagasmartech.com/",
            jobIdList: ['j1']
        },
        {
            id: 'c3',
            nameCompany: 'Phú Cường Thịnh',
            majorCompany: 'may vá',
            fullUnitCompany: 'CÔNG TY TNHH TM – DV PHÚ CƯỜNG THỊNH',
            addressCompany: 'Đồng Nai',
            fullAddressCompany: '30A/20 Khu Phố 4 - P. Hố Nai - TP. Biên Hòa - Đồng Nai',
            introCompany: 'chuyên hàng sơ mi, bảo hộ lao động, đồng phục',
            logoCompany: require('../assets/images/placeholder.jpg'),
            imageCompany: [
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
            ],
            telCompany: '02513. 88 0708',
            emailCompany: 'pct@phucuongthinh.com.vn',
            websiteCompany: 'http://phucuongthinh.com.vn/lien-he.html',
            jobIdList: ['j1']
        },
        {
            id: 'c4',
            nameCompany: "Cửa hàng điện tử Chung Thúy",
            majorCompany: 'Điện tử',
            fullUnitCompany: "Cửa hàng điện tử Chung Thúy",
            addressCompany: 'TP.HCM',
            fullAddressCompany: 'SỐ 020, ĐƯỜNG NGUYỄN KIM, P7, Q10, TP.HCM',
            introCompany: "mua bán & sửa chữa các thiết bị điện tử",
            logoCompany: require('../assets/images/placeholder.jpg'),
            imageCompany: [
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
            ],
            telCompany: '903.104.194',
            emailCompany: 'chungthuyluan@gmail.com',
            websiteCompany: 'http://ledchungthuy.vn/gioi-thieu',
            jobIdList: ['j1']
        },
        {
            id: 'c5',
            nameCompany: 'Family travel',
            majorCompany: 'Du lịch',
            fullUnitCompany: 'TNHH family travel',
            addressCompany: 'TP.HCM',
            fullAddressCompany: 'Số 19, Đường 25A, Phường Tân Quy, Quận 7, TP.HCM',
            introCompany: 'Công Ty TNHH Du Lịch Family Việt Nam – Family Travel được thành lập bởi những con người có chung niềm đam mê du lịch và mong muốn cung cấp những tour du lịch chất lượng cao, cùng dịch vụ chu đáo nhất đến khách hàng. Family Travel chuyên tổ chức những tour du lịch trong nước, khai thác những điểm đến thú vị, hấp dẫn và mang lại cho du khách những trải nghiệm thoải mái nhất.',
            logoCompany: require('../assets/images/placeholder.jpg'),
            imageCompany: [
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
            ],
            telCompany: '0909 494 759',
            emailCompany: 'sales@familytravel.com.vn',
            websiteCompany: 'https://familytravel.com.vn',
            jobIdList: ['j1']
        },
        {
            id: 'c6',
            nameCompany: 'BEN Coffee House',
            majorCompany: 'dịch vụ',
            fullUnitCompany: 'Công ty TNHH Ben Coffee House',
            addressCompany: 'TP.HCM',
            fullAddressCompany: '30 Tôn Thất Thiệp, Phường. bến nghe, Q.1, Ho Chi Minh City',
            introCompany: 'Quán cà phê',
            logoCompany: require('../assets/images/placeholder.jpg'),
            imageCompany: [
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
            ],
            telCompany: '028 3821 6888',
            emailCompany: "jannyminh2@yahoo.com.hk",
            websiteCompany: 'https://www.facebook.com/ben.coffee.house/?locale=vi_VN',
            jobIdList: ['j1']
        },


    ]

    let job = [
        {
            id: "j1",
            companyID: 'c1',
            nameJob: "Dịch thuật văn bản",
            imageCompany: require('../assets/images/placeholder.jpg'),
            nameCompany: "Nhà sách Giáo Dục",
            acceptDisable: ["KT nghe",],
            locationJob: "Hà Nội",
            expJob: "> 1 năm",
            discripJob: ["-Dịch và biên tập các tài liệu tiếng Anh, Pháp, Mỹ, Hàn Quốc… chuyên ngành sang các ngôn ngữ tiếng Việt",
                "-Theo dõi xu hướng của thị trường, nghiên cứu hành vi của người tiêu dùng và các hoạt động của đối thủ cạnh tranh",
                "-Thu thập, phân tích thông tin thị trường, thông tin về sản phẩm, thông tin về các chương trình của đối thủ cạnh tranh",
                "-Thực hiện các báo cáo liên quan",],
            requirementJob: ["-Kinh nghiệm từ 06 tháng trở lên, ưu tiên tốt nghiệp ngành ngôn ngữ anh.",
                "-Ham học hỏi, cầu tiến",
                "-Có hiểu biết và đam mê về dịch thuật",
                "-Nhiệt tình, nhanh nhẹn và say mê công việc",
                "-Có tinh thần trách nhiệm cao",],
            benefitJob: ["- Thu nhập: Lương cứng + % Doanh số + Phụ cấp + Thưởng doanh số (Thu Nhập từ 10-30 Triệu)",
                "- Ngoài ra nhân viên còn được Thưởng sinh nhật, thưởng top doanh số hàng tháng, Hưởng chính sách công đoàn khi cá nhân hoặc người nhà bị ốm, hiếu hỉ,...",
                "- Được tham gia các khóa đào tạo hàng tháng về kỹ năng và chuyên môn nhằm hỗ trợ cho công việc",
                "- Được thử thách, tăng lương, tăng cấp bậc",
                "- Chính sách thăng tiến minh bạch, rõ ràng, xét lên vị trí dựa theo năng lực và kết quả làm việc",],
            locationJobDetai: "- Hà Nội: Tòa CT3 Chung cư X2 Đại Kim - Bộ Quốc Phòng - Phố Trần Hòa - Đại Kim, Hoàng Mai",
            endTime: '01/01/2024',
            majorJob: "IT",
            imageJob: [
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
            ],
        },
        {
            id: "j2",
            companyID: 'c2',
            nameJob: "Tiếp thị khách hàng",
            imageCompany: require('../assets/images/placeholder.jpg'),
            nameCompany: "Cửa hàng Haga Smartech",
            acceptDisable: ["KT phù hợp",],
            locationJob: "Hồ Chí Minh",
            expJob: "",
            discripJob: ["Chuẩn đoán lõi máy, tiếp thị khách hàng",],
            requirementJob: ["Yêu cầu:Trung thực, chịu khó, có trách nhiệm với công việc, nhiệt tình, nhanh nhẹ, lễ phép với khách hàng; tuân thủ quy định của công ty; am hiểu và đam mê Iphone/Ipad/Macbook/Smartphone/Laptop; có kinh nghiệm về kiểm tra chuẩn đoán lỗi máy (không yêu cầu chuyên sâu về Main)",],
            benefitJob: ["Lương 9 đến 17 triệu, đầy đủ chế độ",],
            locationJobDetai: "26 Xuân Thủy, Thảo Điền, Quận 2, Thành phố Hồ Chí Minh",
            endTime: '01/01/2024',
            majorJob: "IT",
            imageJob: [
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
            ],
        },
        {
            id: "j3",
            companyID: 'c2',
            nameJob: "cắt chỉ, xếp quần áo...",
            imageCompany: require('../assets/images/placeholder.jpg'),
            nameCompany: "Công ty TNHH Phú Cường Thịnh\n",
            acceptDisable: ["khuyết tật nhẹ", "khiếm thính",],
            locationJob: "Hồ Chí Minh",
            expJob: "không yêu cầu",
            discripJob: ["Công việc: cắt chỉ, xếp quần áo...công việc đơn giản, có người hướng dẫn.",],
            requirementJob: ["Yêu cầu: chăm chỉ, siêng năng; trung thực, chịu khó; dưới 55 tuổi.",],
            benefitJob: ["Chế độ: có chỗ ở lại; có bếp (có thể tự nấu ăn). Lương: 6 triệu.",],
            locationJobDetai: "30A/20 Khu Phố 4 - P. Hố Nai - TP. Biên Hòa - Đồng Nai",
            endTime: '01/01/2024',
            majorJob: "IT",
            imageJob: [
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
            ],
        },
        {
            id: "j4",
            companyID: 'c2',
            nameJob: "mua bán & sửa chữa các thiết bị điện tử",
            imageCompany: require('../assets/images/placeholder.jpg'),
            nameCompany: "Cửa hàng điện tử Chung Thúy",
            acceptDisable: ["khuyết tật chân", "đi lại được", "tay mắt tốt",],
            locationJob: "Hồ Chí Minh",
            expJob: "học vấn 9/12, trình độ sơ cấp trở lên",
            discripJob: ["Công việc: tư vấn khách hàng; theo dõi đơn hàng",],
            requirementJob: ["tốt nghiệp từ 9/12 trở lên; thành thào vi tính văn phòng; nhanh nhẹn, nghiêm túc trong công việc; ưu tiên biết về điện tử. ",],
            benefitJob: ["Thời gian: 8h30 - 17h30 (T2 - T7); 9h30 - 13h00 (CN). Chế độ: làm đủ năm thưởng từ 2 - 3 tháng lương.",],
            locationJobDetai: "SỐ 020, ĐƯỜNG NGUYỄN KIM, P7, Q10, TP.HCM",
            endTime: '01/01/2024',
            majorJob: "IT",
            imageJob: [
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
            ],
        },
        {
            id: "j5",
            companyID: 'c2',
            nameJob: "May mặc",
            imageCompany: require('../assets/images/placeholder.jpg'),
            nameCompany: "Công ty TNHH Phú Cường Thịnh",
            acceptDisable: ["khiếm thính/câm điếc",],
            locationJob: "Hồ Chí Minh",
            expJob: "không yêu cầu học vấn, Biết làm khuy áo quần",
            discripJob: ["Làm khuy quần áo",],
            requirementJob: ["Biết làm khuy quần áo",],
            benefitJob: ["đầy đủ, hỗ trợ ăn ở, lương 4tr",],
            locationJobDetai: "30A/20 Khu Phố 4 - P. Hố Nai - TP. Biên Hòa - Đồng Nai",
            endTime: '01/01/2024',
            majorJob: "IT",
            imageJob: [
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
            ],
        },
        {
            id: "j6",
            companyID: 'c2',
            nameJob: "sửa chữa các thiết bị điện tử",
            imageCompany: require('../assets/images/placeholder.jpg'),
            nameCompany: "Cửa hàng điện tử Chung Thúy\n",
            acceptDisable: ["Khuyết tật chân",],
            locationJob: "Hồ Chí Minh",
            expJob: "Không yêu cầu học vấn",
            discripJob: [". Công việc: hỗ trợ kỹ thuật phần mềm led - sửa nguồn đèn led.",],
            requirementJob: ["am hiểu về điện tử và vi tính văn phòng; được đào tạo có lương (vừa học, vừa làm).",],
            benefitJob: ["Thử việc 1 tuần, lương: 200.000đ/ngày. làm đủ năm thưởng 2 - 3 tháng lương.",],
            locationJobDetai: "SỐ 020, ĐƯỜNG NGUYỄN KIM, P7, Q10, TP.HCM",
            endTime: '01/01/2024',
            majorJob: "IT",
            imageJob: [
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
            ],
        },
        {
            id: "j7",
            companyID: 'c2',
            nameJob: "Kế toán",
            imageCompany: require('../assets/images/placeholder.jpg'),
            nameCompany: "Cửa hàng Haga Smartech",
            acceptDisable: ["khuyết tật nhẹ",],
            locationJob: "Hồ Chí Minh",
            expJob: "Học vấn 12/12, trình độ trung cấp trở lên",
            discripJob: ["theo dõi thu - chi, hàng tồn kho; theo dõi công nợ khách hàng; xuất hóa đơn trên phần mềm Misa; nhập dữ liệu nội bộ theo yêu cầu của cấp trên; lưu trữ các chứng từ kế toán 1 cách khoa học và an toàn; thực hiện các nghiệp vụ kế toán phát sinh tại công ty; làm việc với các cơ quan liên quan (ngân hàng, BHXH, thuế, ...); các công việc khác khi có liên quan.",],
            requirementJob: ["tốt nghiệp từ trung cấp chuyên ngành trở lên; có 1 năm kinh nghiệm; sử dụng thành thạo các phần mềm Office, ưu tiên đã sử dụng Misa; tiếng Anh giao tiếp căn bản là lợi thế; có ngoại hình dễ nhìn; trung thực, chịu khó, có trách nhiệm với công việc, nhiệt tình, nhanh nhẹn.",],
            benefitJob: ["Chế độ đầy đủ",],
            locationJobDetai: "26 Xuân Thủy, Thảo Điền, Quận 2, Thành phố Hồ Chí Minh",
            endTime: '01/01/2024',
            majorJob: "IT",
            imageJob: [
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
            ],
        },
        {
            id: "j8",
            companyID: 'c2',
            nameJob: "Nhân viên phòng vé",
            imageCompany: require('../assets/images/placeholder.jpg'),
            nameCompany: "Family travel",
            acceptDisable: ["KT chân nhẹ",],
            locationJob: "Hồ Chí Minh",
            expJob: "Học vấn 12/12, trình độ sơ cấp trở lên",
            discripJob: ["tư vấn khách đặt vé máy bay",],
            requirementJob: ["tốt nghiệp từ 12/12 trở lên; từ 20 - 30 tuổi; tay & mắt tốt, nghe nói tốt.",],
            benefitJob: ["BHXH, BHYT, BHTN, lương tháng 13, thưởng hiệu quả xuất vé và các chính sách khác. Lương thỏa thuận",],
            locationJobDetai: "Quận 5",
            endTime: '01/01/2024',
            majorJob: "IT",
            imageJob: [
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
            ],
        },
        {
            id: "j9",
            companyID: 'c2',
            nameJob: "Nhân viên văn phòng",
            imageCompany: require('../assets/images/placeholder.jpg'),
            nameCompany: "Family travel",
            acceptDisable: ["khuyết tật nhẹ",],
            locationJob: "Hồ Chí Minh",
            expJob: "Học vấn 12/12, trình độ cao đẳng",
            discripJob: ["nhập dữ liệu chứng từ; xuất hóa đơn đỏ; đi ngân hàng giao dịch; liên hệ khách sạn và các nhà cung cấp khác; soạn thảo văn bản hành trình theo yêu cầu và các công việc khác theo sự sắp xếp của cấp trên.",],
            requirementJob: ["tốt nghiệp từ cao đẳng chuyên ngành kế toán, quản trị kinh doanh trở lên",],
            benefitJob: ["Đầy đủ chế, lương thỏa thuận",],
            locationJobDetai: "Quận 5",
            endTime: '01/01/2024',
            majorJob: "IT",
            imageJob: [
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
            ],
        },
        {
            id: "j10",
            companyID: 'c2',
            nameJob: "Phụ bếp, phụ quầy pha chế",
            imageCompany: require('../assets/images/placeholder.jpg'),
            nameCompany: "BEN Coffee House",
            acceptDisable: ["Khuyết tật nhẹ",],
            locationJob: "Hồ Chí Minh",
            expJob: "Không yêu cầu học vấn, trình độ",
            discripJob: ["dọn dẹp quầy pha chế/ bếp/ sơ chế rau, rửa chén, ly, .... Thời gian làm việc: theo ca (6h00 - 14h00; 14h00 - 22h00).",],
            requirementJob: ["siêng năng, chịu khó; ưu tiên người đứng tuổi, riêng quầy pha chế từ 30 - 40 tuổi. Trình độ chuyên môn: không yêu cầu.",],
            benefitJob: ["Mức lương CB: từ 4 triệu trở lên + 500.000đ/ tháng (phụ cấp cơm trưa) + 280.000đ/ tháng (phụ cấp xăng, xe). Thử việc từ 1 - 2 tháng",],
            locationJobDetai: "30 Tôn Thất Thiệp, Phường. bến nghe, Q.1, Ho Chi Minh City",
            endTime: '01/01/2024',
            majorJob: "IT",
            imageJob: [
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
            ],
        },
        {
            id: "j11",
            companyID: 'c2',
            nameJob: "Nhân viên thu ngân",
            imageCompany: require('../assets/images/placeholder.jpg'),
            nameCompany: "BEN Coffee House",
            acceptDisable: ["Khuyết tật nhẹ",],
            locationJob: "Hồ Chí Minh",
            expJob: "Học vấn 12/12, trình độ sơ cấp",
            discripJob: ["Trao đổi khi phỏng vấn. Ca 8 ",],
            requirementJob: ["Trao đổi khi phỏng vấn",],
            benefitJob: ["lương 4.000.0000 trở lên",],
            locationJobDetai: "30 Tôn Thất Thiệp, Phường. bến nghe, Q.1, Ho Chi Minh City",
            endTime: '01/01/2024',
            majorJob: "IT",
            imageJob: [
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
            ],
        },
        {
            id: "j12",
            companyID: 'c2',
            nameJob: "Tư vấn, giới thiệu sách cho khách",
            imageCompany: require('../assets/images/placeholder.jpg'),
            nameCompany: "Nhà sách Giáo Dục",
            acceptDisable: ["KT chân, tay",],
            locationJob: "Hà Nội",
            expJob: "Không có",
            discripJob: ["- Tư vấn, giới thiệu sản phẩm trực tiếp cho khách hàng tại Hệ thống các cửa hàng Sách Giáo Dục của Công ty trên địa bàn Hà Nội.",
                "- Dọn dẹp vệ sinh cửa hàng",
                "- Sắp xếp hàng hóa và đặt hàng",
                "- Làm việc xoay ca: 7h30-15h hoặc 14h00-21h30",],
            requirementJob: ["",],
            benefitJob: ["- Môi trường làm việc chuyên nghiệp, năng động, sáng tạo, có cơ hội thăng tiến",
                "- Thu nhập 5 - 8 Triệu",
                "- Được thưởng quý, năm",
                "- Đi du lịch Công ty và nhiều đãi ngộ tốt",
                "- Có cơ hội gắn bó lâu dài với Công ty",],
            locationJobDetai: "86 Cầu Bươu, Thanh Trì",
            endTime: '01/01/2024',
            majorJob: "IT",
            imageJob: [
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
            ],
        },

    ]
    const notiData = [
        {
            notiID: 'n1',
            companyID: 'c1',
            notiType: 'viewed',
            notiTime: '2023-10-14T20:10:00+07:00',
            forUser: 'currentUser.id',
        },
        {
            notiID: 'n2',
            companyID: 'c4',
            notiType: 'rated',
            notiTime: '2023-10-16T15:22:30+07:00',
            forUser: 'currentUser.id',
        },
        {
            notiID: 'n2',
            companyID: 'c1',
            notiType: 'rated',
            notiTime: '2023-10-16T15:22:30+07:00',
            forUser: 'currentUser.id',
        },
        {
            notiID: 'n2',
            companyID: 'c2',
            notiType: 'rated',
            notiTime: '2023-10-16T15:22:30+07:00',
            forUser: 'currentUser.id',
        }
    ]
    return { company, job, currentUser, notiData }
}