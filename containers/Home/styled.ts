import styled from "styled-components";

export const HomePage = styled.div``;

export const HomeContainer = styled.div`
  margin-top: 90px;
  margin-left: 80px;
  margin-right: 40px;

  display: flex;
  flex-direction: row;
  gap: 160px;
  align-items: center;
  position: relative;

  .text {
    flex: 1;
    max-width: 465px;

    .title {
      margin-bottom: 45px;

      font-family: "Graduate";
      font-style: normal;
      font-weight: 400;
      font-size: 30px;
      line-height: 155.1%;

      text-align: center;
      letter-spacing: 0.12em;
      text-transform: uppercase;

      color: #ffffff;

      text-shadow: 0px 4px 4px #e02f29;
    }

    .content {
      font-family: "Graduate";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 155.1%;

      text-align: justify;
      letter-spacing: 0.12em;
      text-transform: uppercase;

      color: #ffffff;
    }
  }

  .images {
    flex: 1;
  }

  .vector {
    position: absolute;
    z-index: -1;
    /* left: 100%; */
    left: 28%;
    right: auto;

    width: 976px;
    height: 800px;

    background: radial-gradient(
      100.01% 50% at 0.01% 50%,
      rgba(224, 47, 41, 0.5) 0%,
      rgba(39, 40, 58, 0) 100%
    );
    transform: matrix(-1, 0, 0, 1, 0, 0);
    opacity: 60%;
  }
`;

export const RoadmapContainer = styled.div`
  margin-top: 110px;

  display: flex;
  flex-direction: column;

  .title {
    font-family: "Graduate";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 155.1%;

    text-align: center;
    letter-spacing: 0.12em;
    text-transform: uppercase;

    color: #ffffff;

    text-shadow: 0px 4px 4px #e02f29;
  }

  .content {
    margin-top: 110px;

    display: flex;
    flex-direction: row;
    gap: 100px;

    position: relative;

    .left {
      margin-left: 69px;

      flex: 1;

      display: flex;
      flex-direction: column;
      gap: 100px;
    }

    .right {
      margin-top: 160px;
      margin-right: 10px;

      flex: 1;

      display: flex;
      flex-direction: column;
      gap: 100px;
    }

    .line {
      position: absolute;
      left: 52%;
      right: auto;

      background-color: red;
      width: 3px;
      height: 100%;

      .line-item {
        position: absolute;
        left: -230px;
        top: 35px;
        background-color: red;
        width: 230px;
        height: 3px;

        div {
          position: absolute;
          top: -5px;
          /* border: 3px solid #e02f29; */
          width: 11.5px;
          height: 11.5px;
          background-color: red;
          transform: rotate(45deg);
          /* transform: rotate(90deg); */
        }
      }

      .line-item-2 {
        position: absolute;
        /* left: -230px; */
        top: 200px;
        background-color: red;
        width: 230px;
        height: 3px;

        div {
          position: absolute;
          top: -5px;
          left: 230px;
          /* border: 3px solid #e02f29; */
          width: 11.5px;
          height: 11.5px;
          background-color: red;
          transform: rotate(45deg);
          /* transform: rotate(90deg); */
        }
      }

      .line-item-3 {
        position: absolute;
        left: -230px;
        top: 455px;
        background-color: red;
        width: 230px;
        height: 3px;

        div {
          position: absolute;
          top: -5px;
          /* left: 230px; */
          /* border: 3px solid #e02f29; */
          width: 11.5px;
          height: 11.5px;
          background-color: red;
          transform: rotate(45deg);
          /* transform: rotate(90deg); */
        }
      }

      .line-item-4 {
        position: absolute;
        /* left: -230px; */
        top: 860px;
        background-color: red;
        width: 230px;
        height: 3px;

        div {
          position: absolute;
          top: -5px;
          left: 230px;
          /* border: 3px solid #e02f29; */
          width: 11.5px;
          height: 11.5px;
          background-color: red;
          transform: rotate(45deg);
          /* transform: rotate(90deg); */
        }
      }
    }
  }
`;

export const RoadmapItem = styled.div`
  max-width: 638px;
  display: flex;
  flex-direction: column;

  .title {
    /* margin-left: auto; */
    /* margin-right: auto; */

    font-family: "Graduate";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 204.45%;

    text-align: center;

    color: #e5e5e5;

    text-shadow: 0px 4px 4px #e02f29;
  }

  .small-title {
    font-family: "Graduate";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 204.45%;

    color: #e5e5e5;

    text-shadow: 0px 4px 4px #e02f29;
  }
  .text {
    margin-bottom: 27px;

    font-family: "Graduate";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 204.45%;

    color: #ffffff;
  }
`;

export const TeamContainer = styled.div`
  margin-top: 100px;

  display: flex;
  flex-direction: column;

  .title {
    font-family: "Graduate";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 155.1%;

    text-align: center;
    letter-spacing: 0.12em;
    text-transform: uppercase;

    color: #ffffff;

    text-shadow: 0px 4px 4px #e02f29;
  }

  .team-group-1 {
    display: flex;
    flex-direction: row;
    gap: 30px;

    margin-top: 35px;
    margin-bottom: 35px;
    margin-left: auto;
    margin-right: auto;
  }

  .team-group-2 {
    display: flex;
    flex-direction: row;
    gap: 80px;

    margin-top: 35px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Team = styled.div`
  width: 186px;
  height: auto;
  padding: 12px 0px;
  border: 1px solid white;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  .image {
  }
  .name {
    font-family: "Graduate";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 155.1%;

    text-align: center;
    letter-spacing: 0.12em;
    text-transform: uppercase;

    color: #000000;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .text {
    font-family: "Graduate";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 155.1%;

    text-align: center;
    letter-spacing: 0.12em;
    text-transform: uppercase;

    color: #000000;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 165px;
  margin-bottom: 85px;

  .title {
    font-family: "Graduate";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 155.1%;

    text-align: center;
    letter-spacing: 0.12em;
    text-transform: uppercase;

    color: #ffffff;

    text-shadow: 0px 4px 4px #e02f29;
  }

  .link {
    display: flex;
    flex-direction: row;
    gap: 90px;

    margin-top: 100px;

    margin-left: auto;
    margin-right: auto;

    .item {
      cursor: pointer;
    }
  }
`;
