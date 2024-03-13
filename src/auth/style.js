import styled from "styled-components";

const AuthWrapper = styled.div`
  padding-top: 48px;
  padding-left: 36px;
  padding-right: 36px;
  padding-bottom: 24px;
  .input-wrapper {
    line-height: 9px;
  }

  .check-icon-auth {
    color: ${({theme})=> theme['white-color']};
    width: 100%;
    max-width: 96px;
    height: 100%;
    min-height: 96px;
    background: #018900;
    border-radius: 64px;
    margin-top: -14px;
  }
  .right-side-img-wrapper {
    margin-left: 106px;
    margin-top: 98px;
  }
  .right-content-wrapper {
    width: 100%;
    max-width: 414px;
    margin: auto;
    margin-top: 157px;
    h1 {
      font-weight: 900;
      font-size: 32px;
      line-height: 42px;
      /* or 131% */

      letter-spacing: 0.02em;
      color: ${({ theme }) => theme["primary-color"]};
      text-align: left;
      text-transform: capitalize;
      margin-top: 32px;
      padding-bottom: 48px;
      margin-bottom: 0px;
    }
    .verified-wrapper {
      font-size: 36px;
      font-weight: 700;
      line-height: 44px;
      letter-spacing: 0px;
      text-align: left;
      text-transform: capitalize;
      margin-top: 32px;
      padding-bottom: 24px;
      margin-bottom: 0px;
    }
    button {
      margin-top: 24px;
    }
  }
  .market-place-wrapper {
    .Market-button {
      width: 100%;
      max-width: 298px;
      display: flex;
      margin-top: 32px;
      justify-content: center;
    }
  }
  .country-detail {
    img {
      margin-right: 6px;
    }
    h3 {
      font-size: 18px;
    }
  }
  .title {
    /* text-transform: capitalize; */
    /* padding-left: 2px; */
    margin-bottom: 32px;
    font-size: 32px;
    line-height: 42px;
    /* or 131% */
    letter-spacing: 0.02em;
    font-weight: 900;
    color: ${({ theme }) => theme["primary-color"]};
  }
  .subtitle {
    font-weight: 700;
    font-size: 16px !important;
    line-height: 20px !important;
    letter-spacing: 0.04em !important;
    color: ${({ theme }) => theme["black-color"]};
    margin-bottom: 24px;
  }
  .auth-section-left {
    padding-top: 82px;
  }
  .auth-section-right {
    padding-top: 49px;
  }
  .auth-section-middle {
    .auth-section-middle-content {
      &.auth-section-signup-content {
        max-height: calc(100vh - 325px);
      }
      max-height: calc(100vh - 250px);
      overflow-x: hidden;
      overflow-y: auto;
    }
    .email-verification-content {
      .auth-section-middle-content {
        max-height: calc(100vh - 150px);
      }
      p {
        margin-bottom: 64px;
        font-weight: 400;
        font-size: 13px;
        line-height: 16px;
        letter-spacing: 0.02em;
        color: ${({ theme }) => theme["secondary-color"]};
      }
      .title {
        margin-bottom: 16px;
      }
    }
    .input-wrapper {
      margin-bottom: 16px;
    }
    .password-input {
      margin-bottom: 16px;
    }
  }
  label.form-label {
    line-height: 14px;
    font-weight: 500;
    font-size: 11px;
    display: block;
  }
  .form-text {
    margin-top: 4px;
    display: block;
    /* margin-left: -1px; */
  }
  .form-check {
    margin-top: -3.5px;
    .form-check-label {
      letter-spacing: 0.02em;
      a {
        text-decoration: none;
        color: ${({ theme }) => theme["link-color"]};
        margin-left: 2px;
      }
    }
  }
  .forgot-link {
    margin-bottom: 32px;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0.02em;
    a {
      color: ${({ theme }) => theme["link-color"]};
      text-decoration: none;
    }
  }

  .already-account {
    text-align: center;
    label {
      line-height: 18px;
      font-weight: 400;
      font-size: 13px;
      line-height: 16px;
      letter-spacing: 0.02em;

      color: ${({ theme }) => theme["black-color"]};
      a {
        color: ${({ theme }) => theme["link-color"]};
        text-decoration: none;
      }
    }
  }
  .auth-btn {
    margin-bottom: 24px;
    letter-spacing: 0.02em;
  }
  .login-btn {
    margin-top: 32px;
    margin-bottom: 32px;
  }
  .auth-reset-footer {
    padding-top: 16px;
  }
  .sub-heading {
    margin-bottom: 24px;
    padding-left: 2px;
    &.sub-heading-cm {
      margin-bottom: 26px;
    }
  }
  .not-recive-text {
    margin-top: 64px;
    width: 100%;
    max-width: 300px;
    margin-bottom: 0 !important;
    a {
      color: ${({ theme }) => theme["link-color"]};
      text-decoration: none;
    }
  }

  .email-verification-wrapper {
    text-align: center;
    .email-verification-image {
      text-align: center;
    }
  }
`;
const StoreConnectivity = styled.div`
  padding-top: 32px;
  padding-left: 36px;
  padding-right: 36px;
  padding-bottom: 24px;
  .onboarding-title {
    h1 {
      font-weight: 900;
      font-size: 24px;
      line-height: 28px;
      letter-spacing: 0.02em;
      color: ${({theme})=> theme['primary-color']};
      margin-bottom: 0;
      img {
        margin-right: 15px;
        cursor: pointer;
        margin-left: 2px;
      }
    }
  }
  .store-connectivity {
    margin-top: 147px;
    .store-sections {
      .store-section {
        background: ${({theme})=> theme['white-color']};
        border-radius: 4px;
        .store-section-image {
          min-height: 168px;
          justify-content: center;
          display: flex;
          align-items: center;
          padding-top: 12px;
          border: 1px solid ${({theme})=> theme['texst-primary']};
          border-bottom: 0px;
          border-top-left-radius: 0px;
          border-top-right-radius: 0px;
        }
        button {
          background-color: ${({ theme }) => theme["link-color"]};
          color: ${({ theme }) => theme["white-color"]};
          margin-bottom: 0;
          padding-top: 11px;
          padding-bottom: 11px;
        }
      }
    }
  }
  .store-advertising {
    padding-top: 24px;
    .search-input {
      margin-bottom: 72px;
      input {
        padding: 10px 15px;
      }
      svg {
        right: 12.9px;
        font-size: 14px;
        top: 13px;
        color: ${({ theme }) => theme["link-color"]};
      }
    }
    .marketplace-region {
      background: ${({theme})=> theme['white-color']};;
      border: 1px solid #cfd8dc;
      border-radius: 8px;
      padding: 24px;
      padding-bottom: 23px;
      h3 {
        letter-spacing: 0.04em;
        color: ${({theme})=> theme['primary-color']};
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 8px;
        margin-left: -1px;
      }
      h4 {
        letter-spacing: 0.02em;
        font-weight: 400;
        font-size: 13px;
        line-height: 16px;
        color: ${({theme})=> theme['label-color']};
        margin-bottom: 16px;
        margin-left: -1px;
      }
      h5 {
        font-weight: 700;
        font-size: 13px;
        line-height: 16px;
        letter-spacing: 0.02em;
        color: ${({ theme }) => theme["secondary-color"]};
        margin-bottom: 16px;
        margin-left: -1px;
      }
      .region-list {
        .form-check-input[type="checkbox"] {
          width: 14px;
          height: 14px;
          margin-top: 4px;
          min-height: 14px;
          border-radius: 2px;
          border: 1px solid ${({theme})=> theme['label-color']};
        }
        .form-check {
          /* margin-bottom: 16.5px; */
          margin-bottom: 12px;
          margin-left: -1px;
          margin-top: -4px;
          .form-check-label {
            padding-left: 10px;
            font-weight: 400;
            font-size: 13px;
            line-height: 16px;
            letter-spacing: 0.02em;
            color: ${({ theme }) => theme["secondary-color"]};
            img {
              margin-right: 9.5px;
              margin-top: 0;
            }
            span {
              position: relative;
              top: 2px;
            }
          }
        }
        button {
          margin-top: 15px;
          margin-bottom: 0;
          margin-left: -1px;
        }
      }
    }
  }
  .store-profile {
    .store-select-all {
      margin-bottom: 15px;
      margin-top: -10px;
      padding-right: 10px;

      a {
        display: inline-block;
        text-decoration: none;
        color: ${({ theme }) => theme["link-color"]};
        font-weight: 700;
        font-size: 13px;
        line-height: 16px;
        letter-spacing: 0.02em;
      }
    }
    .profile-card {
      background: ${({theme})=> theme['white-color']};
      border: 2px solid ${({theme})=> theme['text-primary']};
      border-radius: 4px;
      padding: 16px;
      padding-top: 14px;
      padding-right: 15px;
      padding-left: 15px;
      padding-bottom: 15px;
      margin-bottom: 24px;
      &:hover {
        border: 2px solid ${({theme})=> theme['link-color']};
      }
      .form-check {
        margin-bottom: 15px;
        min-height: 20px;
        .form-check-input[type="checkbox"] {
          width: 17px;
          height: 17px;
          margin-right: 10px;
          margin-top: 1px;
          border: 1px solid ${({theme})=> theme['label-color']};
          border-radius: 4px;
        }
        .form-check-label {
          font-weight: 700;
          font-size: 16px;
          line-height: 18px;
          letter-spacing: 0.04em;
          color: ${({theme})=> theme['primary-color']};
        }
      }
      .profile-card-content {
        p {
          margin-bottom: 0;
          font-weight: 400;
          font-size: 13px;
          line-height: 16px;
          letter-spacing: 0.02em;
          color: ${({ theme }) => theme["secondary-color"]};
          small {
            font-weight: 500;
            font-size: 11px;
            line-height: 14px;
            letter-spacing: 0.02em;
            color: ${({theme})=> theme['label-color']};
            margin-left: -2px;
            margin-right: 1px;
          }
        }
      }
    }
    button {
      margin: 0 auto;
      display: block;
      margin-top: 7px;
    }
  }
`;
const StoreProfile = styled.div``;
const CongratulationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: calc(100vh - 96px);
  img {
    margin-bottom: 32px;
  }
  h3 {
    margin-bottom: 16px;
    font-weight: 900;
    font-size: 32px;
    line-height: 42px;
    letter-spacing: 0.02em;
    color: ${({theme})=> theme['primary-color']};
  }
  p {
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.04em;
    color: ${({ theme }) => theme["secondary-color"]};
    max-width: 351px;
    margin: 0 auto;
    margin-bottom: 32px;
    text-align: center;
  }
  button {
    display: block;
    margin: 0 auto;
    letter-spacing: 0.02em;
  }
`;

export { AuthWrapper, StoreConnectivity, StoreProfile, CongratulationWrapper };
