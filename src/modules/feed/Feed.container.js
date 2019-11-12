import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Feed from './Feed.component';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
