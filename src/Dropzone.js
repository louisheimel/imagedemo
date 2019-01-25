import React from "react";
import classNames from "classnames";
import Dropzone from "react-dropzone";
const dropdownStyles = {
  position: "absolute",
  width: "100%",
  top: "0",
  left: "0",
  bottom: "0"
};
export class MyDropzone extends React.Component {
  onDrop = (acceptedFiles, rejectedFiles) => {
    // Do something with files
    console.log(acceptedFiles, rejectedFiles);
  };

  render() {
    return (
      <Dropzone onDrop={this.onDrop}>
        {({ getRootProps, getInputProps, isDragActive }) => {
          return (
            <div
              {...getRootProps()}
              className={classNames("dropzone", {
                "dropzone--isActive": isDragActive
              })}
            >
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop files here...</p>
              ) : (
                <p style={dropdownStyles}>
                  Try dropping some files here, or click to select files to
                  upload.
                </p>
              )}
            </div>
          );
        }}
      </Dropzone>
    );
  }
}
