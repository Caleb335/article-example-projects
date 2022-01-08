import styled from "styled-components";

export const InputGroup = styled.div`
  display: block;
  padding: 10px 0;

  label {
    line-height: 19px;
    display: block;
    padding-bottom: 8px;
    color: var(--danger);
  }

  .select {
    color: var(--danger);
  }

  .select {
    height: 45px;
    border-radius: 6px;
    padding: 0 19px 0 22px;
    background: none;
    border: 1px solid grey;
    width: 100%;

    :focus {
      border: 1px solid var(--danger);
    }

    :hover {
      border: 1px solid var(--danger);
    }
  }

  .inputs {
    height: 45px;
    border-radius: 6px;
    padding: 0 19px 0 22px;
    background: none;
    border: 1px solid grey;
    width: 100%;
    color: #fff;

    :focus {
      border: 1px solid var(--danger);
    }

    :hover {
      border: 1px solid var(--danger);
    }
  }
`;
