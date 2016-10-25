/*jshint esversion: 6 */

import React from 'react';

export default class Questions extends React.Component {

  constructor(props) {
    super(props);

    this.handleResult = this.handleResult.bind(this);
    this.onRadioChanged = this.onRadioChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.state = {
      index: 0,
      answer: [],
      value: '',
      match: false,
      result: false
    };
  }

  onRadioChanged(e){
    this.setState({
      value: e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault(); 

    this.setState((prevState) => ({
      answer: prevState.answer.concat(this.state.value),
      index: prevState.index + 1
    }));
  }

  handleResult(){
    this.setState((prevState) => ({
      result: true
    }));

    const user_answer = this.state.answer.join('');
    const a1_str = [2,1,2].join('');

    if (user_answer === a1_str) {
      this.setState((prevState) => ({
        match: true
      }));
    } else {
      this.setState((prevState) => ({
        match: false
      }));
    }
  }

  build(index, arr){
    if (arr[index] === undefined) {
      return (<div id="result_text" onClick={this.handleResult}>看結果(按我按我)</div> )
    } else {
      return (
        <form className="form" onSubmit={ this.handleSubmit }>
          <div className="form__num">{arr[index].num}</div>
          <div className="form__title">{arr[index].title}</div>
          <div className="form__input">
            <input type="radio" value="1" onChange={this.onRadioChanged} name={arr[index].title} /><span>{arr[index].option_one}</span></div>
          <div className="form__input">
            <input type="radio" value="2" onChange={this.onRadioChanged} name={arr[index].title} /><span>{arr[index].option_two}</span></div>
          <button>下一題</button>
        </form>
      )
    }    
  }

  handleReset(){
    this.setState({
      index: 0,
      answer: [],
      value: '',
      result: false
    });
  }

  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    const content = [
      {
        "num": "第一題",
        "title": "阿切通常何時下班？",
        "option_one": "沒有下班過！！",
        "option_two": "都偷偷早退"
      },
      {
        "num": "第二題",
        "title": "阿切幾歲?",
        "option_one": "猜個屁呀！",
        "option_two": "超年輕的！"
      },
      {
        "num": "第三題",
        "title": "阿切正在幹麻?",
        "option_one": "你怎麼會知道...",
        "option_two": "在收集後宮中..."
      },
    ]

    return (
      <div id="wrapper">
        {this.state.result === false ? 
          this.build(this.state.index, content) : 
          this.state.match === true ?  
            "你很瞭解阿切" :
            "你還不夠瞭解阿切"
        }
        {this.state.result === false ? 
          '' : 
          <div id="reset_btn" onClick={this.handleReset}>重玩</div>
        }
      </div>
    );
  }
}


