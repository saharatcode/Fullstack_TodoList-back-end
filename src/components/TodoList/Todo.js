// เป็ไฟล์ที่ใช้เขียน UI ของเว็บ Todo

import React, { useState } from 'react';
import { Button, Row, Col, Input } from 'antd';
import axios from 'axios';

export default function Todo(props) {
    const [changeInput, setChangeInput] = useState("");
    const [isEdit, setIsEdit] = useState(false);

    //ฟังชันทำการอัพเดพ todo
    const updateTodoItem = async (id) => {
        await axios.put(`/todo-list/${id}`, { task: changeInput });
        props.fetchData();
        setIsEdit(false);
    };

    //ฟังก์ชัน ปุ่ม toggle 
    const toggleEdit = () => {
        setChangeInput(props.todo.task);
        // เมื่อคลิกปุ่ม Edith 
        setIsEdit(true);
    };

    // เมื่อกด Edith ทำให้ isEdith เป็น true
    let contents = (
        <Row style={{ width: '100%' }}>
            {/* ช่องใส่ข้อความ */}
            <Col span={20}>
                <Input value={changeInput} onChange={(e) => setChangeInput(e.target.value)} />
            </Col>
            {/* Done */}
            <Col span={4}>
                <Button type="primary" onClick={() => updateTodoItem(props.todo.id)}>Done</Button>
            </Col>
        </Row>
    );

    // ปกติ แสดงฟอมนี้
    if (!isEdit) {
        contents = (
            <Row style={{ width: '100%' }}>
                <Col span={16}>
                    <Row justify="start">
                        {props.todo.task}
                    </Row>
                </Col>
                <Col span={4}>
                    <Button style={{ backgroundColor: 'orange' }} onClick={() => toggleEdit()}>Edit</Button>
                </Col>
                <Col span={4}>
                    <Button type="danger" onClick={() => props.delete(props.todo.id)}>Delete</Button>
                </Col>
            </Row>
        );
    }

    return (
        <div style={{ width: '100%' }}>
            {/* เมื่อกด Edith ทำให้ isEdith เป็น true */}
            {contents}
        </div>
    );
}
