import { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const fileTypes = ["image/png", "image/jpeg", "image/jpg"];

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && fileTypes.includes(selected.type)) {
      setFile(selected);
      setError(" ");
    } else {
      setFile(null);
      setError("Invalid Image File, Please select a valid one. (png/jpg/jpeg)");
    }
  };

  return (
    <form>
      <div className="input">
        <input
          type="file"
          id="add-file"
          className="file"
          onChange={changeHandler}
          hidden
        />
        <label htmlFor="add-file">+</label>
      </div>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div className="file-name">{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
