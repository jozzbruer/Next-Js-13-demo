import Link from 'next/link';
import React from 'react';

const IssueList = ({ issues }) => {
	return (
		<ul>
			{issues.map((issue) => (
				<li key={issue.id}>
					<article>
						<h2>{issue.title}</h2>
						<p>{issue.summary}</p>
						<p>
							<Link href={`/issues/${issue.id}`}>View Details</Link>
						</p>
					</article>
				</li>
			))}
		</ul>
	);
};

export default IssueList;
