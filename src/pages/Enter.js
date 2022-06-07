import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Enter() {
    const history = useNavigate()
    const [age, setAge] = useState()
    const [wrongAns, setWrongAns] = useState(false)

    const _gotoHome = () => {
        if (age == 21) {
            setWrongAns(false)
            history('/home')
        }
        else {
            setWrongAns(true)
        }
    }

    return (
        <div style={{backgroundColor: "#F9C9C9", height: "100vh"}}>
            <div style={{ height: 80 }} />
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ fontSize: 40, fontWeight: "bold" }}>Enter Your Age</div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ width: "80%", marginTop: 20 }}>
                    <Form.Control
                        type="text"
                        placeholder="?"
                        value={age}
                        onChange={(e)=> setAge(e.target.value)}
                    />

                </div>
            </div>
          {wrongAns?  <div style={{display:"flex", justifyContent:"center",marginTop: 10,fontSize: 20,color: "red"}}>
                ປ້ອນອາຍຸບໍຖືກເດີ້(ຢ່າໂກງອາຍຸແມ້) 😜
            </div>: <div />
            }

            <div style={{ display: "flex", justifyContent: "center", marginTop: 60 }}>
                <Button
                    style={{
                        backgroundColor: "#FF88F5",
                        borderColor: "#FF88F5",
                        borderRadius: 20
                    }}
                    onClick={() => _gotoHome()}
                >Unlock</Button>
            </div>

        </div>
    )
}

export default Enter
