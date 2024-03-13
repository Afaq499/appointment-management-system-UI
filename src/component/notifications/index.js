import { notification } from 'antd';
// import 'antd/dist/antd.css';

const Notification = (type, title, description) => {
  notification[type]({
    message: title,
    description: description,
    top: 65,
  });
};

export default Notification;
