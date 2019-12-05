import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateSelectedMenu } from 'common/redux/common.actions';
import { createKuluster } from 'modules/kuluster/Kuluster.actions';
import { getFeed } from './Feed.actions';
import Feed from './Feed.component';

const mapStateToProps = state => ({
  feed: state && state.feed && state.feed.feed,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    createKuluster,
    getFeed,
    updateSelectedMenu,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
