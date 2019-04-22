import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import deburr from 'lodash/deburr';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import { TextField, Paper, Typography, MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {
  setKeyword,
  getMoviesByKeyword,
  cleanKeywordMovies,
  getMovieById
} from './../actions/moviesActions';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing.unit
  },
  name: {
    marginBottom: '.8rem'
  },
  container: {
    position: 'relative'
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0
  },
  suggestion: {
    display: 'block'
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none'
  },
  divider: {
    height: theme.spacing.unit * 2
  }
});

class Search extends Component {
  suggestions() {
    const { keywordMovies } = this.props;
    const suggestions = keywordMovies.map(item => {
      return { label: item.title, id: item.id };
    });
    return suggestions;
  }

  state = {
    single: '',
    popper: '',
    suggestions: []
  };

  renderInputComponent(inputProps) {
    const { classes, inputRef = () => {}, ref, ...other } = inputProps;

    return (
      <TextField
        fullWidth
        InputProps={{
          inputRef: node => {
            ref(node);
            inputRef(node);
          },
          classes: {
            input: classes.input
          }
        }}
        {...other}
      />
    );
  }

  renderSuggestion(suggestion, { query, isHighlighted }) {
    const matches = match(suggestion.label, query);
    const parts = parse(suggestion.label, matches);

    return (
      <MenuItem selected={isHighlighted} component="div">
        <div>
          {parts.map((part, index) =>
            part.highlight ? (
              <span key={String(index)} style={{ fontWeight: 500 }}>
                {part.text}
              </span>
            ) : (
              <strong key={String(index)} style={{ fontWeight: 300 }}>
                {part.text}
              </strong>
            )
          )}
        </div>
      </MenuItem>
    );
  }

  getSuggestions(value) {
    const inputValue = deburr(value.trim()).toLowerCase();
    const inputLength = inputValue.length;
    let count = 0;
    const suggestions = this.suggestions();

    return inputLength === 0
      ? []
      : suggestions.filter(suggestion => {
          const keep =
            count < 5 &&
            suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;

          if (keep) {
            count += 1;
          }

          return keep;
        });
  }

  getSuggestionValue(suggestion) {
    return suggestion.label;
  }

  handleSuggestionsFetchRequested = ({ value }) => {
    this.props.setKeyword(value);
    this.props.getMoviesByKeyword(value);
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
    this.props.cleanKeywordMovies();
  };

  handleChange = name => (event, { newValue }) => {
    this.setState({
      [name]: newValue
    });

    if (event.target.innerText) {
      const movieToSearch = this.state.suggestions.filter(
        suggestion => suggestion.label === newValue
      );
      const id = movieToSearch[0].id;
      this.props.getMovieById(id);
      this.setState({
        [name]: ''
      });
    }
  };

  render() {
    const { classes } = this.props;
    const autosuggestProps = {
      renderInputComponent: this.renderInputComponent,
      suggestions: this.state.suggestions,
      onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
      onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
      getSuggestionValue: this.getSuggestionValue,
      renderSuggestion: this.renderSuggestion
    };

    return (
      <div className={classes.root}>
        <div className={classes.name}>
          <Typography variant="button" color="inherit">
            Keywords
          </Typography>
        </div>
        <Autosuggest
          {...autosuggestProps}
          inputProps={{
            classes,
            placeholder: 'Filter by keywords...',
            value: this.state.single,
            onChange: this.handleChange('single')
          }}
          theme={{
            container: classes.container,
            suggestionsContainerOpen: classes.suggestionsContainerOpen,
            suggestionsList: classes.suggestionsList,
            suggestion: classes.suggestion
          }}
          renderSuggestionsContainer={options => (
            <Paper {...options.containerProps} square>
              {options.children}
            </Paper>
          )}
        />
      </div>
    );
  }
}

Search.propTypes = {
  classes: PropTypes.object.isRequired,
  keywordMovies: PropTypes.array.isRequired,
  setKeyword: PropTypes.func.isRequired,
  getMoviesByKeyword: PropTypes.func.isRequired,
  cleanKeywordMovies: PropTypes.func.isRequired,
  getMovieById: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  keyword: state.movies.keyword,
  keywordMovies: state.movies.keywordMovies
});

export default connect(
  mapStateToProps,
  { setKeyword, getMoviesByKeyword, cleanKeywordMovies, getMovieById }
)(withStyles(styles)(Search));
