import React, { Component } from "react";
import Rellax from "rellax";
import Parallax from "parallax-js";

class Parallax3 extends Component {
  componentDidMount() {
    //Rellax code
    // new Rellax(".rellax");
    // var req = require.context("../assets", false, /.*\.png$/);
    // req.keys().forEach(function(key) {
    //   req(key);
    // });

    //Parllax code
    var scene = document.getElementById("scene");
    var parallaxInstance = new Parallax(scene, {
      limitX: 0
    });
  }

  render() {
    return (
      <div>
        <div id="scene">
        <div data-depth="0.3">
            <img
              className="hero"
              src="https://lh3.googleusercontent.com/gAJF-qBxbYYbpgRsw7WbQ_-nmbxWXMAJZCpJqUqVBNAqdS9LvFp2blXE-i0led09dJks_vlODNd2K2LKEI-gEpocMk82xKJHuosBAZcgKtf0TfV2xz6bGWrse7oPgUnk5nTw9_qIStotoNUvfRjia8OeVdwJOTkYzkcYy8rxxUNvFZvrj4bg97Kg8grIu_MtX7eNFRBITkw5Eeyds7NqGLob5R5H2WTVgcmPF6CtSo_WqE18K_dHhwEOYIJnTjNsM8XeTa_EkEgL8HBfdWLDsbhwkJS-dmwVHIh-V7DW3t1kXOjRRVAQ1k8J7QNvm0-mV1mGLhIt8dUTqYntOZnv-FedfnHUUZDzgWEAc9lNJ2tdz1x7NjKqVbCkIdyB_L70M790eDoKcvjEK7wEgr0cW617C1hcFAUYDIeNgkGECV2gWlJMQjMWV4gu71aZL5NiXRgE5pCyWQhDVuXwo5F7Goe9bffQrsb1YetPEW42hCpA-4TnpP5cb51kEwPLKjuq-9CDJaM-gaoRo1fK-Sg2vYlfkuJga8iyWc273dJ_5BPVP-zYfo9WQcO1pzQDFi26Qal8qpnMQIsnjdf0YSOoXuIw38TViZE2BKEqkbVU8r2EJjDoppJTdPQgCHBayJ82uf2dQDvTwNr02LIc_ARpjeeM7RwUVtH3PxYoWSrVzCKv4Fsoq5We1AKNZkXpinQJDzIS8Il44rPrAqiDn0-lI3B3=w2322-h1452-no"
              alt="node"
              data-limit-x="1"
            />
          </div>
          <div data-depth="0.3">
            <img
              className="hero"
              src="https://lh3.googleusercontent.com/JATWNzVpP4_Q9tHfrYzqWewzP0nTWuOcM4_CeQ2WpmgAfUzXFZfV-5le6ZDd5S4s2EzmwxacFtb7lKAOpLt2UqtTYVr0D1HKMzNmTQmzpMq3EWXz0SMpafbsyLAZo0XFGulfYfjcxKm9154COhkJdTH8MaUkKmEEN06D66p_trVJHPgrv8LlVi4JE1uPwcZvdk4o4-TlkgNFJtl1xTYvI0fLLVSxNrknk6K9NpfbmIt63iM2gWERYDrsZVIhoGGAU8YlmTcm11mtr8k0ds7ooMN8XvYpZ_RLI3UICgevLTan1OcsCpDqTdADw3VgS6-WHip48gzBEpOa2KMxjmaghXp_vu2kdhWu_tQo7yJTNASECu0-B0Rpm3IUxX3V-HSsjxKPP-rCISpXLRemc1KUOGEV4pQh_bia2Vw2KvtyyJM1d8AR1LzRDtzpukxbc7Z_E-GkRwvRxeI_og8WgNSAmLLUqs0BXPXm4xyDqMD8Ysn9j1-9Qq7rDP5c_nH9R_eNy8O59bPbYa0P97ZO4tvd-TCjmMMfhKFKtUKXgvB2m0XwdkTXVNPzBWcJZkTucNpi3Qcrptv2c9sEFHa3K6E0h_3lZzQEwKFATdxRL9PcWGaG31ckFsOraOOBrER36jNRP9pmMS3A-l4yLfUw1OhSbbA9xVNL_uk=w2316-h1452-no"
              alt="node"
              data-limit-x="1"
            />
          </div>
          <div data-depth="0.7">
            <img
            className="hero"
              src="https://lh3.googleusercontent.com/LSALvAy1i5Y_PTIkhLLM8Qsnxv3J7f91obDX78hq7u0VXumbEgR6P0j9RzMbD_8g_lhAMw1eP-gV4uJ_C_f0c4_AcNhSWg-iQ9eArMtdy-mbHaAKM44-4pV1h88zh4XQJEOrSWji3MPShineCW2z5lIOtgQibGJz0kp3Om3B928FSfnqO6suNVDZ5YJiPjltmmmD9zFXkw1jznnDA7vrzlbQclP6XAssGAy-0uy0p33uPvwlNU9kavSsYJG-qDGqh31UWVchbw5PUlnrbFr36O5onPDMK0M77uk_vJx7SAWmB7TiAYegJTszS-m7_xfXQmUaLqDnb91nz8aD-YoGKyi76KRCRR2e0wlf51sSy7mDqXY3J-pAeMlD1LYKle8vfl1jIZpcb2Wwog_BMZOJj61Ur_J4RuQ-9nOKhYPnStw3-yru6fnnJFdxndQWmMNRJghfK3dRsGnR-jWvF6zv5ROlc4VAubiHVQxCFlpPD_RTccuVdw1tikvTiTYL7UDHGwrf0g5mOB_SJGz3632m8GX_d3zy02_ZlihKKuZCIy5AN8TkjSbe2EO2kIfcrdphrvGfJEi7Q5cAk2_dBur_HUhHCMD3tD50ko_XFCbQGxoA7sE8hXIghlmOJo9mOaCVUjadOCXyRVifYr98N4-7LGCoSbE4LQo=w2316-h1452-no"
              alt="node"
            />
          </div>
          <h1 className="mist-title" data-depth="0.9">
            The Joy of Hiking
          </h1>
        </div>
      </div>
    );
  }
}

export default Parallax3;
