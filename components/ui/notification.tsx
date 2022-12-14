import ReactDOM from "react-dom";
import classes from "./notification.module.css";

const Notification: React.FC<{
  title: string;
  message: string;
  status: string;
}> = ({ title, message, status }) => {
  let statusClasses = "";

  if (status === "success") {
    statusClasses = classes.success;
  }

  if (status === "error") {
    statusClasses = classes.error;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  return ReactDOM.createPortal(
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    // @ts-ignore
    document.getElementById("notifications")
  );
};

export default Notification;
