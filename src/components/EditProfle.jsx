import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const EditProfile = () => {
  const navigate = useNavigate();
  const userProfile = useSelector((state) => state.profile.content);
  const handleUpload = () => {};

  return (
    <div className="bg-white editImgProfile">
      <header className="d-flex">
        <button className="px-3 hide" onClick={() => navigate(-1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="icon i24x24"
            id="arrow-left-medium"
            aria-hidden="true"
            role="none"
            data-supported-dps="24x24"
            fill="currentColor"
            focusable="false"
            aria-busy="false"
          >
            <path d="M9 4l-4.87 7H22v2H4.13L9 20H6.56L1 12l5.56-8z"></path>
          </svg>
        </button>
        <h1 className="py-3 px-4 border-bottom w-100 h1Profile">Modifica presentazione</h1>
        <button className="hide fw-500 border-bottom" style={{ height: "58px" }} onClick={handleUpload}>
          Salva
        </button>
      </header>
      <main>
        {console.log(userProfile)}
        <Form.Floating className="mb-3 mx-1 border border-black rounded">
          <Form.Control id="floatingInput" type="text" value={userProfile && userProfile.name} />
          <label htmlFor="floatingInput">Nome</label>
        </Form.Floating>

        <Form.Floating className="mb-3 mx-1 border border-black rounded">
          <Form.Control id="floatingInput" type="text" value={userProfile && userProfile.surname} />
          <label htmlFor="floatingInput">Cognome</label>
        </Form.Floating>

        <Form.Floating className="mb-3 mx-1 border border-black rounded">
          <Form.Control id="floatingInput" type="text" value={userProfile && userProfile.title} />
          <label htmlFor="floatingInput">Sommario</label>
        </Form.Floating>

        <Form.Floating className="mb-3 mx-1 border border-black rounded">
          <Form.Control
            id="floatingInput"
            type="text"
            value={userProfile && userProfile.bio === "" ? "--" : userProfile?.bio || ""}
          />
          <label htmlFor="floatingInput">Settore</label>
        </Form.Floating>

        <Form.Floating className="mb-3 mx-1 border border-black rounded">
          <Form.Control id="floatingInput" type="text" value={userProfile && userProfile.area} />
          <label htmlFor="floatingInput">Paese/Area geografica</label>
        </Form.Floating>

        <Form.Floating className="mb-3 mx-1 border border-black rounded">
          <Form.Control id="floatingInput" type="text" value={"--"} />
          <label htmlFor="floatingInput">CAP</label>
        </Form.Floating>
      </main>
    </div>
  );
};

export default EditProfile;
