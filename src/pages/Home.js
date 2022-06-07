import React from 'react'

function Home() {
    return (
        <div style={{ backgroundColor: "#F9C9C9", height: "120vh" }}>
            <div style={{ height: 50 }} />
            {/* <div style={{ textAlign: "center", color: "#98018C" }}>
                <h2>Congratulation !! Just Scroll Down</h2>
            </div> */}
            <div style={{ textAlign: "center", color: "#FF60A0" }}>
                <h1>Happy Birthday </h1>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <img src="assets/images/da-birth.png" alt="Avatar" style={{ width: 300, borderRadius: 10 }} />
            </div>

            <div style={{ textAlign: "center", marginTop: 20, marginLeft: 10, marginRight: 10 }}>
                ສຸກສັນວັນເກີດເດີ້🎂🎂 ຂໍໃຫ້ມີສຸຂະພາບແຂງແຮງ ເຮັດບົດໃຫ້ຜ່ານ ຈົບແລ້ວໃຫ້ໄດ້ວຽກທີ່ມັກເດີ້
            </div>
            <div style={{ textAlign: "center", marginTop: 20, marginLeft: 10, marginRight: 10, marginBottom: 20 }}>
                ຖ້າມື້ໃດບໍສະບາຍ ເມື່ອຍ ທໍ້ແທ້ ໃຫ້ກັບເຂົ້າມາອ່ານເວັບນີ້ອີກເດີ້ 😁 ເປັນກຳລັງໃຈໃຫ້ສະເໝີ ✌🏻✌🏻
            </div>

            <div style={{ textAlign: "center", backgroundColor: "#FFE4FD" }}>
                <div style={{ height: 30 }} />
                <div style={{ fontWeight: "bold", fontSize: 36, color: "#860049" }}>Work</div>

                <div style={{ textAlign: "center", marginTop: 20, marginLeft: 10, marginRight: 10 }}>
                    ຂໍໃຫ້ໄດ້ພົບງານໃນຝັນ ແລະ ຜ່ານຜ່າທຸກອຸປະສັກເດີ້ ທຸກຢ່າງຍາກແຕ່ຕອນເລີ່ມຕົ້ນເທົ່ານັ້ນແຫລ
                </div>
                <div style={{ textAlign: "center", marginTop: 20, marginLeft: 10, marginRight: 10, marginBottom: 20 }}>
                    ຢ່າທໍ້ ຢ່າຖອຍ ຢາກເຮັດຫຍັງກະລຸຍໂລດ (ຢ່າລືມມາປຶກສານຳກັນແນ່)
                </div>

                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingLeft: 25,
                    paddingRight: 25
                }}>
                    <img src="assets/images/da-work1.jpg" alt="" style={{ width: 200, borderRadius: 20, marginTop: 20 }} />
                </div>

                <div style={{ height: 30 }} />
                <div style={{ textAlign: "center", backgroundColor: "white", height: "60vh" }}>
                    <div style={{ height: 30 }} />
                    <div style={{ fontWeight: "bold", fontSize: 36, color: "#E366B5" }}>Healthy</div>

                    <div style={{ textAlign: "center", marginTop: 20, marginLeft: 10, marginRight: 10 }}>
                       ຂໍໃຫ້ສຸຂະພາບແຂງແຮງ ຫົວໃຈສົດໃສ ບໍເຈັບບໍໄຂ້ເດີ້
                    </div>
                    <div style={{ textAlign: "center", marginTop: 20, marginLeft: 10, marginRight: 10, marginBottom: 20 }}>
                    ກິນເຂົ້າ ດື່ມນ້ຳໃຫ້ຫຼາຍໆເດີ້ ອວບໆຈຶ່ງງາມ ພັກຜ່ອນຫຼາຍໆ ຫ້າມນອນເດິກ ເຂົ້າໃຈບໍ
                    </div>

                    <div style={{ height: 30 }} />
                    <div style={{ display: "flex", justifyContent: "space-around", width: "100%" }}>
                        <img src="assets/images/da5.jpg" alt="" style={{ width: 170, height: 160 }} />
                        <img src="assets/images/da9.jpg" alt="" style={{ width: 170, height: 160 }} />
                    </div>
                    <div style={{ height: 30 }} />
                </div>

                <div style={{ textAlign: "center", height: "80vh", marginBottom: 50 }}>
                    <div style={{ height: 30 }} />
                    <div style={{ fontWeight: "bold", fontSize: 36, color: "#E366B5" }}>One last thing</div>

                    <div style={{ textAlign: "center", marginTop: 20, marginLeft: 10, marginRight: 10 }}>
                        ເວລາຄືຜ່ານໄປໄວເນາະ ບໍຮູ້ສຶກໂຕເລີຍວ່າເຮົາຮູ້ຈັກກັນມາ 4 ປີແລ້ວ
                    </div>
                    <div style={{ textAlign: "center", marginTop: 20, marginLeft: 10, marginRight: 10, marginBottom: 20 }}>
                        ຂອບໃຈທຸກຢ່າງທີ່ຊ່ວຍກັນເລື້ອຍມາ (ເວັບອາດບໍງາມເດີ້ ບໍຖະໜັດເລື່ອງ Design 555)
                    </div>

                    <div style={{ height: 30 }} />
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingLeft: 25,
                        paddingRight: 25
                    }}>
                        <img src="assets/images/both.jpeg" alt="" style={{ width: 300, borderRadius: 20, marginTop: 20 }} />
                    </div>
                    <div style={{ height: 30 }} />
                </div>

            </div>

        </div>
    )
}

export default Home
