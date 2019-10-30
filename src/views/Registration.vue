<template>
  <div class="container-fluid fondo-main">
    <Nav />
    <Header class="fondo-grass" />
    <!--Container Principal-->
    <h1 class="fondo-oscuro center z-depth-3">Form</h1>
    <div class="container z-depth-5 p1">
      <br />
      <form action="show_data.html" method="GET">
        <fieldset>
          <legend>Basic Information</legend>
          <div>
            <label>
              Player’s First Name:
              <br />
              <input type="text" name="first_name" placeholder="George" required autofocus />
            </label>
            <br />
            <label>
              Last Name:
              <br />
              <input type="text" name="last_name" placeholder="Dalton" required />
            </label>
            <br />
            <label>
              Street Address:
              <br />
              <input
                type="text"
                name="address"
                placeholder="1234 Rivadavia, CABA, Argentina"
                required
              />
            </label>
            <br />
            <label>
              City:
              <br />
              <input type="text" name="city" placeholder="Buenos Aires" required />
            </label>
            <br />
            <label>
              Zip Code:
              <br />
              <input type="number" name="zip" placeholder="1234" required />
            </label>
            <br />
            <label>
              Birth Date:
              <br />
              <input type="date" name="birth" required />
            </label>
            <br />
            <label>Gender:</label>
            <p>
              <label>
                <input type="radio" name="gender" value="Female" required />
                <span>Female</span>
              </label>
            </p>
            <p>
              <label>
                <input type="radio" name="gender" value="Male" required />
                <span>Male</span>
              </label>
            </p>
            <br />
            <label>Grade:</label>
            <p>
              <label>
                <input type="radio" name="grade" value="Pre-School" required />
                <span>Pre-School</span>
              </label>
            </p>
            <p>
              <label>
                <input type="radio" name="grade" value="1st" required />
                <span>1st</span>
              </label>
            </p>
            <p>
              <label>
                <input type="radio" name="grade" value="2nd" required />
                <span>2nd</span>
              </label>
            </p>
            <p>
              <label>
                <input type="radio" name="grade" value="3rd" required />
                <span>3rd</span>
              </label>
            </p>
            <p>
              <label>
                <input type="radio" name="grade" value="4th" required />
                <span>4th</span>
              </label>
            </p>
            <p>
              <label>
                <input type="radio" name="grade" value="5th" required />
                <span>5th</span>
              </label>
            </p>
            <br />
            <label>
              Parent/Guardian:
              <br />
              <input type="text" name="parent_guardian" placeholder="George Dalton" required />
            </label>
            <br />
            <label>
              Contact Phone:
              <br />
              <input type="number" name="phone" placeholder="11-1234-1234" required />
            </label>
            <br />
            <label>
              Contact Email:
              <br />
              <input type="Email" name="email" placeholder="youremail@gmail.com" required />
            </label>
          </div>
        </fieldset>
        <br />

        <fieldset>
          <legend class>Which elementary schools do you live near?</legend>

          <div class="input-field">
            <select name="first_school" required>
              <option value>Select</option>
              <option value="AJ_Katzenmaier">AJ Katzenmaie</option>
              <option value="Greenbay">Greenbay</option>
              <option value="Howard_A_Yeager">Howard A Yeager</option>
              <option value="Marjorie_P_Hart">Marjorie P Hart</option>
              <option value="North_Elementary">North Elementary</option>
              <option value="South_Elementary">South Elementary</option>
            </select>
            <label>First Closest School:</label>
          </div>
          <br />
          <div class="input-field">
            <select name="first_school" required>
              <option value>Select</option>
              <option value="AJ_Katzenmaier">AJ Katzenmaie</option>
              <option value="Greenbay">Greenbay</option>
              <option value="Howard_A_Yeager">Howard A Yeager</option>
              <option value="Marjorie_P_Hart">Marjorie P Hart</option>
              <option value="North_Elementary">North Elementary</option>
              <option value="South_Elementary">South Elementary</option>
            </select>
            <label>Second Closest School:</label>
          </div>
        </fieldset>
        <br />
        <fieldset>
          <legend class>What position(s) do you normally play? (check all that apply)</legend>
          <div class="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  class="filled-in"
                  name="position_normally_play"
                  value="Forward"
                />
                <span>Forward</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  type="checkbox"
                  class="filled-in"
                  name="position_normally_play"
                  value="Defense"
                />
                <span>Defense</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  type="checkbox"
                  class="filled-in"
                  name="position_normally_play"
                  value="Midfield"
                />
                <span>Midfield</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  type="checkbox"
                  class="filled-in"
                  name="position_normally_play"
                  value="Goalkeeper"
                />
                <span>Goalkeeper</span>
              </label>
            </p>
          </div>
        </fieldset>

        <br />
        <fieldset>
          <legend class>Uniform</legend>
          <div class="input-field">
            <div class="input-field">
              <p>
                <label>
                  <input type="checkbox" class="filled-in" name="already_uniform" value="true" />
                  <span>Already Have a Uniform</span>
                </label>
              </p>
            </div>
            <br />
            <div class="input-field">
              <select name="Jersey" required>
                <option value>Select</option>
                <option value="Youth_Small">Youth Small</option>
                <option value="Youth_Medium">Youth Medium</option>
                <option value="Youth_Large">Youth Large</option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
                <option value="Extra_Large">Extra-Large</option>
              </select>
              <label>Jersey Size:</label>
            </div>

            <br />
            <div class="input-field">
              <select name="Shorts" required>
                <option value>Select</option>
                <option value="Youth_Small">Youth Small</option>
                <option value="Youth_Medium">Youth Medium</option>
                <option value="Youth_Large">Youth Large</option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
                <option value="Extra_Large">Extra-Large</option>
              </select>
              <label>Shorts Size:</label>
            </div>
          </div>
        </fieldset>
        <div style="text-align: justify ">
          <p>
            <b>Permission to Play</b>
            <br />I, the parent or guardian of the minor registrant, agree that the registrant and I will abide by all the rules of the Northside Youth Soccer League (NYSL). In recognizing the possibility of physical injury associated with soccer and in consideration for the “League” accepting the registrant for its soccer programs and activities, I hereby release, discharge, and/or otherwise indemnify NYSL, their employees and associated personnel and volunteers, including the facilities used for practices and games, against any claim by or on behalf of the registrant as a result of the registrant’s participation in the program and/or being transported to or from NYSL sponsored activities, which transportation. By signing below, I hereby agree and authorize the above. In addition, by signing below, I also acknowledge that I have read the
            cancellation policy and agree to its terms.
          </p>
        </div>

        <label>
          Parent/Guardian Signature:
          <input
            type="text"
            name="Permission_name"
            placeholder="Insert your name"
            required
          />
        </label>
        <label>
          Date:
          <input type="date" name="Permission_date" required />
        </label>
        <br />
        <br />
        <div class="center">
          <button class="btn waves-effect waves-light orange" type="submit" name="action">
            Submit
            <i class="material-icons right">send</i>
          </button>
        </div>
      </form>
      <br />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import Header from "@/components/Header.vue";

export default {
  name: "contact",
  components: {
    Nav,
    Header
  },
    mounted(){
    //Inicializador de plugins de Materialize
    M.AutoInit();
  }
};
</script>