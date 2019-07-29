import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';
import StarRating from 'react-native-star-rating';

import {
  AppStyles,
  Colors,
  Metrics,
  Fonts,
} from '../../themes';

class Ratings extends PureComponent {

  static propTypes = {
    value: PropTypes.number,
  };

  static defaultProps = {
    value: 0
  };

  render() {

    const {
      value,
    } = this.props;

    return (
      <View
        style={styles.container}
      >
        <Text style={[
          styles.title,
        ]}>
          Rating
        </Text>
        <View style={{ paddingRight: 20 }}>
          <StarRating
            disabled={false}
            maxStars={5}
            rating={value}
            starColor={'#eae678'}
            starSize={12}
            //selectedStar={(rating) => this.onStarRatingPress(rating)}
          />
        </View>
      </View>
    );
  }
}
export default (Ratings);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 12,
    marginTop: Metrics.smallMargin,
    marginBottom: 5
  },
  description: {
    fontSize: 16,
    fontWeight: "bold",
  },
})
