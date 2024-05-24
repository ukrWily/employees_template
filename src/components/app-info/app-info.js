import "./app-info.css";

const AppInfo = ({ data }) => {
  return (
    <div className="app-info">
      <h1>Облік співробітників у компанії N</h1>
      <h2>Загальна кількість співробітників: {data.length}</h2>
      <h2>Премію отримають: {data.filter((item) => item.increase).length}</h2>
    </div>
  );
};

export default AppInfo;
