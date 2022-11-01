import React from 'react';
import classes from './IssueDetails.module.css';
const IssueDetails = ({ issue }) => {
	return (
		<article className={classes.details}>
			<header>
				<h1>{issue.title}</h1>
				<p>{issue.summary}</p>
			</header>
			<p>{issue.description}</p>
		</article>
	);
};

export default IssueDetails;
