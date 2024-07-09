export default function IconTextCard({ path, icon, text }) {
  return (
    <>
      <div
        style={{maxWidth:"584px", border: "1px solid #979797" }}
        className=" bg-secondary p-22"
      >
        <a
          className="d-flex align-items-center   text-decoration-none"
          style={{ color: "#979797" }}
          href={"/" || path}
        >
          <div className="me-5">{icon}</div>
          <h5 className="fs-24">{text}</h5>
        </a>
      </div>
    </>
  );
}
