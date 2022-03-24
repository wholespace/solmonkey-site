import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;

  header {
    margin-top: 40px;
    margin-left: 120px;
    margin-right: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .item {
      font-family: "Graduate";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 21px;

      text-align: center;
      text-transform: capitalize;

      color: #ffffff;

      text-shadow: 0px 4px 4px #e02f29;

      cursor: pointer;
    }
  }

  .text {
    font-family: "Graduate";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 17px;

    text-transform: capitalize;

    text-shadow: 0px 4px 4px #e02f29;

    text-align: center;
  }

  .tools {
    margin-top: 13px;
    margin-left: auto;
    margin-right: auto;

    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 20px;

    .discord {
      cursor: pointer;
    }

    .twitter {
      cursor: pointer;
    }

    .but {
      background: #e02f29;
      border-radius: 20px;
      padding: 12px 16px;

      font-family: "Graduate";
      font-style: normal;
      font-weight: 400;
      font-size: 10px;
      line-height: 11px;
      text-align: center;
      text-transform: capitalize;
    }
  }
`;
