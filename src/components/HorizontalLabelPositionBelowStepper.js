import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Grid, TextField, Paper} from '@material-ui/core';
import RadioButtonGroup from './RadioButtonGroup';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const styles = theme => ({
  root: {
    width: '90%',
  },
  backButton: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
   formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
    scorecard: {
    margin: theme.spacing.unit * 3,
  },
   scores: {
    margin: theme.spacing.unit,
  },
});

function getSteps() {
  return ['', '', '', '', '', '', ''];
}

function getStepContent(stepIndex,handleChange,user,classes) {

  switch (stepIndex) {
    case 0:
      return ( 
         <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">1. We can go for keys when there is a possibility that our user could change the data.</FormLabel>
          <RadioGroup
            name="question1"
            className={classes.group}
            value={user.question1}
            onChange={handleChange('0')}
          >
            <FormControlLabel value="Keys" control={<Radio />} label="key" />
            <FormControlLabel value="ref" control={<Radio />} label="ref" />
            <FormControlLabel value="both" control={<Radio />} label="both" />
            <FormControlLabel value="none of these above" control={<Radio />} label="none of these above" />
            
          </RadioGroup>
        </FormControl>
      );
    case 1:
      return    ( 
         <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">2. JSX is typesafe.</FormLabel>
          <RadioGroup
            name="question2"
            className={classes.group}
            value={user.question2}
           onChange={handleChange('0')}
          >
            <FormControlLabel value="True" control={<Radio />} label="True" />
            <FormControlLabel value="False" control={<Radio />} label="False" />
            
          </RadioGroup>
        </FormControl>
      );
    case 2:
        return ( 
         <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">3.React merges the object you provide into the current state using __________.</FormLabel>
          <RadioGroup
            name="question3"
            className={classes.group}
            value={user.question3}
            onChange={handleChange('0')}
          >
            <FormControlLabel value="state()" control={<Radio />} label="state()" />
            <FormControlLabel value="setState()" control={<Radio />} label="setState()" />
            
          </RadioGroup>
        </FormControl>
      );
    case 3:
        return ( 
         <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">4. Arbitrary inputs of components are called __________</FormLabel>
          <RadioGroup
            name="question4"
            className={classes.group}
            value={user.question4}
            onChange={handleChange('0')}
          >
            <FormControlLabel value="Keys" control={<Radio />} label="key" />
            <FormControlLabel value="Props" control={<Radio />} label="Props" />
            <FormControlLabel value="Elements" control={<Radio />} label="Elements" />
            <FormControlLabel value="Ref" control={<Radio />} label="Ref" />
            
          </RadioGroup>
        </FormControl>
      );
    case 4:
        return ( 
         <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">5. Which of the following needs to be updated to achieve dynamic UI updates?</FormLabel>
          <RadioGroup
            name="question5"
            className={classes.group}
            value={user.question5}
           onChange={handleChange('0')}
          >
            <FormControlLabel value="State" control={<Radio />} label="State" />
            <FormControlLabel value="Props" control={<Radio />} label="Props" />
            
          </RadioGroup>
        </FormControl>
      );
    case 5:
        return ( 
         <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">6. _________ can be done while more than one element needs to be returned from a component.</FormLabel>
          <RadioGroup
            name="question6"
            className={classes.group}
            value={user.question6}
            onChange={handleChange('0')}
          >
            <FormControlLabel value="Abstraction" control={<Radio />} label="Abstraction" />
            <FormControlLabel value="Packing" control={<Radio />} label="Packing" />
            <FormControlLabel value="Insulation" control={<Radio />} label="Insulation" />
            <FormControlLabel value="Wrapping" control={<Radio />} label="Wrapping" />
            
          </RadioGroup>
        </FormControl>
      );
    case 6:
        return ( 
         <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">7. Lifecycle methods are mainly used ___________.</FormLabel>
          <RadioGroup
            name="question7"
            className={classes.group}
            value={user.question7}
            onChange={handleChange('0')}
          >
            <FormControlLabel value="To keep track of event history" control={<Radio />} label="To keep track of event history" />
            <FormControlLabel value="To enhance components" control={<Radio />} label="To enhance components" />
            <FormControlLabel value="Free up resources" control={<Radio />} label="Free up resources" />
            <FormControlLabel value="none of these above" control={<Radio />} label="none of these above" />
            
          </RadioGroup>
        </FormControl>
      );
 
    default:
      return 'Unknown stepIndex';
  }
}

class HorizontalLabelPositionBelowStepper extends React.Component {
  state = {
    activeStep: 0,
    user:[{
      question1:'',
      question2:'',
      question3:'',
      question4:'',
      question5:'',
      question6:'',
      question7:'',
      
    }],
    solution:[{
      question1:'Keys',
      question2:'True',
      question3:'setState()',
      question4:'Props',
      question5:'State',
      question6:'Wrapping',
      question7:'Free up resources',

    }],
    score:0
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));

    if(this.state.activeStep===6){

       console.log(this.state.user[0].question1 === this.state.solution[0].question1)
    if(this.state.user[0].question1 === this.state.solution[0].question1){
      console.log('hi');
      this.setState(state => ({
        score:state.score + 1
      }));
    console.log(this.state.score);

    }
     if(this.state.user[0].question2 === this.state.solution[0].question2){
        this.setState(state => ({
        score:state.score+1
      }));
    }
     if(this.state.user[0].question3 === this.state.solution[0].question3){
        this.setState(state => ({
        score:state.score+1
      }));
    }
     if(this.state.user[0].question4 === this.state.solution[0].question4){
       this.setState(state => ({
        score:state.score+1
      }));
    }
     if(this.state.user[0].question5 === this.state.solution[0].question5){
        this.setState(state => ({
        score:state.score+1
      }));
    }
     if(this.state.user[0].question6 === this.state.solution[0].question6){
        this.setState(state => ({
        score:state.score+1
      }));
    }
     if(this.state.user[0].question7 === this.state.solution[0].question7){
        this.setState(state => ({
        score:state.score+1
      }));
    }
    console.log(this.state.score);

    }
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
  

   
  };


    handleChange = (index) => event => {

      const userCopy = this.state.user;

      userCopy[index] = {...userCopy[index],[event.target.name]:event.target.value};

      this.setState({
        user:userCopy
      })
      
      console.log(this.state.user[0].question1===this.state.solution[0].question1)

    console.log(this.state.user);
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;
   
    return (
      <Grid container justify="center" spacing={24}>
            <Grid item>
            <Paper style={{width:1023,height:500,marginTop:30}}>
      <div style={{padding:40}}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {this.state.activeStep === steps.length ? (
            <div className={classes.scorecard}> 
              <Button  variant="contained" color="primary" >SCORECARD</Button>
              <Grid container>
              <Grid item xs={12} sm={6}>
                <Typography className={classes.scores}>Correct Answers</Typography>
              {this.state.solution.map((ans,id)=> <div>
                <Typography className={classes.scores}>question1 : {ans.question1}</Typography>
                <Typography className={classes.scores}>question2 : {ans.question2}</Typography>
                <Typography className={classes.scores}>question3 : {ans.question3}</Typography>
                <Typography className={classes.scores}>question4 : {ans.question4}</Typography>
                <Typography className={classes.scores}>question5 : {ans.question5}</Typography>
                <Typography className={classes.scores}>question6 : {ans.question6}</Typography>
                <Typography className={classes.scores}>question7 : {ans.question7}</Typography>
                </div>)}
              </Grid>
              <Grid item xs={12} sm={6}>
                 <Typography className={classes.scores}>Your Answers</Typography>
              {this.state.user.map((ans,id)=> <div>
                <Typography className={classes.scores}>question1 : {ans.question1}</Typography>
                <Typography className={classes.scores}>question2 : {ans.question2}</Typography>
                <Typography className={classes.scores}>question3 : {ans.question3}</Typography>
                <Typography className={classes.scores}>question4 : {ans.question4}</Typography>
                <Typography className={classes.scores}>question5 : {ans.question5}</Typography>
                <Typography className={classes.scores}>question6 : {ans.question6}</Typography>
                <Typography className={classes.scores}>question7 : {ans.question7}</Typography>
                <Typography variant="h6" className={classes.scores}> SCORE: {this.state.score} </Typography>

               
                </div>)}
              </Grid>
             
              </Grid>

             
            

            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>{getStepContent(activeStep,this.handleChange,this.state.user,classes)}</Typography>
              <div >
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  color="#000000"
                  className={classes.backButton}
                >
                  Back
                </Button>
                <Button variant="contained" color="primary" onClick={this.handleNext}>
                  {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
      </Paper>  
            </Grid>
            </Grid> 
            //<RadioButtonGroup />
    );
  

}
  }


HorizontalLabelPositionBelowStepper.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(HorizontalLabelPositionBelowStepper);