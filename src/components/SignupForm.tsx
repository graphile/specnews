import * as React from "react";

/*
export const SignupForm: React.FC = () => {
  return (
    <div
      className="sib-form"
      style={{ textAlign: "center", backgroundColor: "#EFF2F7" }}
    >
      <div id="sib-form-container" className="sib-form-container">
        <div
          id="sib-container"
          className="sib-container--large sib-container--vertical"
          style={{
            textAlign: "center",
            backgroundColor: "rgba(255,255,255,1)",
            maxWidth: "540px",
            borderRadius: "3px",
            borderWidth: "1px",
            borderColor: "#C0CCD9",
            borderStyle: "solid",
          }}
        >
          <form
            id="sib-form"
            method="POST"
            action="https://6e384171.sibforms.com/serve/MUIEAPOwO8seacEokjag24hUuK00c86E1qDL0aYqk9LuTKrtJejCwclftqKuPb5xIEiXegR3hlcMEHdpl1OWwiRhdjuA_hLB4ScYCUGV-eBTOKrt_Q_biuvad9fJmb-204QqIjJVgVNaSlRzGgbvR3TxBqK5L8bk_6f_ndWnRArNHGQ6oI657pjUGOjPFzhHL5DLhOoFFKPMqoyR"
          >
            <div style={{ padding: "8px 0" }}>
              <div
                className="sib-form-block"
                style={{
                  fontSize: "32px",
                  textAlign: "left",
                  fontWeight: 700,
                  fontFamily: '"Helvetica", sans-serif',
                  color: "#3C4858",
                  backgroundColor: "transparent",
                }}
              >
                <p>Newsletter</p>
              </div>
            </div>
            <div style={{ padding: "8px 0" }}>
              <div
                className="sib-form-block"
                style={{
                  fontSize: "16px",
                  textAlign: "left",
                  fontFamily: '"Helvetica", sans-serif',
                  color: "#3C4858",
                  backgroundColor: "transparent",
                }}
              >
                <div className="sib-text-form-block">
                  <p>Subscribe to our newsletter and stay updated.</p>
                </div>
              </div>
            </div>
            <div style={{ padding: "8px 0" }}>
              <div className="sib-input sib-form-block">
                <div className="form__entry entry_block">
                  <div className="form__label-row ">
                    <label
                      className="entry__label"
                      style={{
                        fontSize: "16px",
                        textAlign: "left",
                        fontWeight: 700,
                        fontFamily: '"Helvetica", sans-serif',
                        color: "#3c4858",
                      }}
                      htmlFor="EMAIL"
                      data-required="*"
                    >
                      Enter your email address to subscribe
                    </label>
                    <div className="entry__field">
                      <input
                        className="input"
                        type="text"
                        id="EMAIL"
                        name="EMAIL"
                        autoComplete="off"
                        placeholder="EMAIL"
                        data-required="true"
                        required
                      />
                    </div>
                  </div>
                  <label
                    className="entry__error entry__error--primary"
                    style={{
                      fontSize: "16px",
                      textAlign: "left",
                      fontFamily: '"Helvetica", sans-serif',
                      color: "#661d1d",
                      backgroundColor: "#ffeded",
                      borderRadius: "3px",
                      borderColor: "#ff4949",
                    }}
                  ></label>
                  <label
                    className="entry__specification"
                    style={{
                      fontSize: "12px",
                      textAlign: "left",
                      fontFamily: '"Helvetica", sans-serif',
                      color: "#8390A4",
                    }}
                  >
                    Provide your email address to subscribe. For e.g abc@xyz.com
                  </label>
                </div>
              </div>
            </div>
            <div style={{ padding: "8px 0" }}>
              <div className="sib-form-block" style={{ textAlign: "left" }}>
                <button
                  className="sib-form-block__button sib-form-block__button-with-loader"
                  style={{
                    fontSize: "16px",
                    textAlign: "left",
                    fontWeight: 700,
                    fontFamily: '"Helvetica", sans-serif',
                    color: "#FFFFFF",
                    backgroundColor: "#3E4857",
                    borderRadius: "3px",
                    borderWidth: "0px",
                  }}
                  form="sib-form"
                  type="submit"
                >
                  <svg
                    className="icon clickable__icon progress-indicator__icon sib-hide-loader-icon"
                    viewBox="0 0 512 512"
                  >
                    <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
                  </svg>
                  SUBSCRIBE
                </button>
              </div>
            </div>
            <input
              type="text"
              name="email_address_check"
              defaultValue
              className="input--hidden"
            />
            <input type="hidden" name="locale" defaultValue="en" />
            <input type="hidden" name="html_type" defaultValue="simple" />
          </form>
        </div>
      </div>
    </div>
  );
};
*/

export const SignupFormLight: React.FC = () => {
  return (
    <div>
      <p>Subscribe to be notified of new episodes of SpecNews:</p>
      <form
        id="sib-form"
        method="POST"
        action="https://6e384171.sibforms.com/serve/MUIEAPOwO8seacEokjag24hUuK00c86E1qDL0aYqk9LuTKrtJejCwclftqKuPb5xIEiXegR3hlcMEHdpl1OWwiRhdjuA_hLB4ScYCUGV-eBTOKrt_Q_biuvad9fJmb-204QqIjJVgVNaSlRzGgbvR3TxBqK5L8bk_6f_ndWnRArNHGQ6oI657pjUGOjPFzhHL5DLhOoFFKPMqoyR"
        className="subscribe"
      >
        <input
          className="input"
          type="text"
          id="EMAIL"
          name="EMAIL"
          autoComplete="off"
          placeholder="yourname@example.com"
          data-required="true"
          required
        />
        <button form="sib-form" type="submit">
          Subscribe
        </button>
        <input
          type="text"
          name="email_address_check"
          defaultValue=""
          className="input--hidden"
        />
        <input type="hidden" name="locale" defaultValue="en" />
        <input type="hidden" name="html_type" defaultValue="simple" />
      </form>
    </div>
  );
};
