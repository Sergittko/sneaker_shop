import { connect } from "react-redux";
import Main from "./Main";

let MainContainer = (props) => {
  return <Main staffPics={props.staffPics} newReleases={props.newReleases} />;
};

let mapStateToProps = (state) => {
  return {
    staffPics: state.main.staffPics,
    newReleases: state.main.newReleases,
  };
};

MainContainer = connect(mapStateToProps, {})(MainContainer);

export default MainContainer;
