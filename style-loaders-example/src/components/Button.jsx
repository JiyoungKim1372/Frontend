import React from 'react';
import styles from './Button.module.css';
import classNames from 'classnames/bind';


const cx = classNames.bind(styles);
console.log(cx('button', 'loading'));

class Button extends React.Component {
  state = {
    loading:false,
  };

  render() {
    // console.log(classNames('foo', 'bar'));
    // console.log(classNames('foo', 'bar', 'baz'));

    const {loading} = this.state;

    return (
    <button 
    onClick={this.startLoading}
    className={cx("button", {loading: loading })}
    {... this.props}
    />
  );
    }

   startLoading = () => {
    this.setState({
      loading:true,
    });

    setTimeout(()=> {
      this.setState({
        loading:false,
      });
    },1000);
  } 
}

export default Button;