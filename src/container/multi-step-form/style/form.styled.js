import styled from "styled-components";

export const MainFormWrapper = styled.div`
  width: 800px;
  height: 100%;
  margin: 0 auto !important;
  padding: 10px 75px;
  margin-top: 20px !important;
  box-shadow: 1px 1px 8px #ddd;

  .final-step {
    text-align: center;
  }

  .interactive {
    margin-top: -20px;
    padding-bottom: 20px !important;
    font-size: 20px;

    span {
      color: var(--primary);
      font-weight: bold;
    }
  }

  .form-head {
    display: flex;
    justify-content: space-between;

    .form-state {
      padding: 5px 10px;
      width: 50%;
      height: 100%;
      border-radius: 8px;
      background: #ddd;
      box-shadow: 1px 1px 1px #ddd;
    }
  }

  form {
    height: 100%;
    margin-top: 40px;
    padding: 20px 0;

    .input-group {
      display: flex;
      flex-direction: column;
      padding: 0 0 14px 0;

      label {
        padding: 0 0 8px 0;
      }

      input {
        padding: 0 10px;
        outline: none;
        height: 45px;
        width: 100%;
        background: none;
        border: 1px solid var(--grey);
      }
    }

    button {
      height: 50px;
      width: 100%;
      background: var(--primary);
      color: #fff;
      font-weight: 500;
      font-size: 17px;
      border: none;
      outline: none;
      margin-top: 30px;

      :hover {
        cursor: pointer;
      }
    }
  }
`;
