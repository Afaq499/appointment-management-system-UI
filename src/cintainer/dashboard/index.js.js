import React, { useState } from 'react';
import { Form, Button, Select, DatePicker, TimePicker, Modal, Spin } from 'antd';
import { AgGridReact } from 'ag-grid-react';
import { useDispatch, useSelector } from 'react-redux';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import { CreateAppointment } from '../../redux/slices/appointment-slice';

const { Option } = Select;

const AppointmentComponent = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.appointment);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form.submit();
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    console.log('Form values:', values);
    const { category, day } = values || {}
    dispatch(CreateAppointment({
      appointmentDate: day,
      category
    }));
  };

  return (
    <div>
      <Spin tip="Loading..." spinning={loading}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <Form form={form} layout="inline" onFinish={onFinish}>
            <Form.Item name="year" label="Year">
              <Select style={{ width: 120 }}>
                <Option value="2023">2023</Option>
                <Option value="2024">2024</Option>
              </Select>
            </Form.Item>
            <Form.Item name="month" label="Month">
              <Select style={{ width: 120 }}>
                <Option value="1">January</Option>
                <Option value="2">February</Option>
              </Select>
            </Form.Item>
            <Form.Item name="day" label="Day">
              <DatePicker style={{ width: 120 }} />
            </Form.Item>
            <Form.Item name="time" label="Time">
              <TimePicker style={{ width: 120 }} />
            </Form.Item>
            <Form.Item name="category" label="Category">
              <Select style={{ width: 120 }}>
                <Option value="consultation">Consultation</Option>
                <Option value="checkup">Check-up</Option>
                <Option value="therapy">Therapy</Option>
                {/* Add more categories as needed */}
              </Select>
            </Form.Item>
            <Form.Item>
              <Button type="primary" onClick={showModal}>
                Confirm Appointment
              </Button>
            </Form.Item>
          </Form>
        </div>

        <Modal
          title="Confirm Appointment"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Are you sure you want to confirm this appointment?</p>
        </Modal>

        {/* AG Grid React component with pagination */}
        <div className="ag-theme-alpine" style={{ height: '300px', width: '100%' }}>
          <AgGridReact
            pagination={true}
            paginationPageSize={10}
          // Add AG Grid column definitions and row data here
          />
        </div>
      </Spin>
    </div>
  );
};

export default AppointmentComponent;
