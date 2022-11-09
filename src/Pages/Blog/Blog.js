import React from 'react';
import useTitle from '../../hooks/useTitle';
import TitleBanner from '../Shared/TitleBanner/TitleBanner';

const Blog = () => {
    useTitle('Blog')
    return (
        <>
            <TitleBanner title={'Blog'}></TitleBanner>
            <div className="container my-5">
                <div className="row gy-4">
                    <div className="col-xl-8 mx-auto">
                        <div className="card">
                            <div className="card-header bg-info py-3">
                                <h4 className="text-white">Question: #1 Difference between SQL and NoSQL?</h4>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className='table table-striped table-bordered'><thead><tr><th>SQL</th><th>NoSQL</th></tr></thead><tbody><tr><td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td><td>Non-relational or distributed database system.</td></tr><tr><td>These databases have fixed or static or predefined schema</td><td>They have dynamic schema</td></tr><tr><td>These databases are not suited for hierarchical data storage.</td><td>These databases are best suited for hierarchical data storage.</td></tr><tr><td>These databases are best suited for complex queries</td><td>These databases are not so good for complex queries</td></tr><tr><td>Vertically Scalable</td><td>Horizontally scalable</td></tr><tr><td>Follows ACID property</td><td>Follows CAP(consistency, availability, partition tolerance)</td></tr><tr><td><strong>Examples: </strong>MySQL, PostgreSQL, Oracle, MS-SQL Server etc</td><td><strong>Examples: </strong>MongoDB, GraphQL, HBase, Neo4j, Cassandra etc</td></tr></tbody></table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 mx-auto">
                        <div className="card">
                            <div className="card-header bg-info py-3">
                                <h4 className="text-white">Question: #2 What is JWT, and how does it work?</h4>
                            </div>
                            <div className="card-body">
                                <h5>JWT</h5>
                                <p className='lead'>RJSON Web Token (JWT) is <strong>an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object</strong>. This information can be verified and trusted because it is digitally signed.</p>
                                <h5 className='mt-4'>How JWT Work?</h5>
                                <p className='lead'>Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 mx-auto">
                        <div className="card">
                            <div className="card-header bg-info py-3">
                                <h4 className="text-white">Question: #3 What is the difference between javascript and NodeJS?</h4>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className='table table-bordered'>
                                        <tbody>
                                            <tr>
                                                <td width="22%"><strong>Basis Of Comparison Between JavaScript vs Node JS</strong></td>
                                                <td width="37%"><strong>JavaScript</strong></td>
                                                <td width="40%"><strong>Node JS</strong></td>
                                            </tr>
                                            <tr>
                                                <td width="22%"><strong>Type</strong></td>
                                                <td width="37%">JavaScript is a programming language. It is running in any web browser with a proper browser engine.</td>
                                                <td width="40%">It is an interpreter and environment for JavaScript with some specific useful libraries which JavaScript programming can use separately.</td>
                                            </tr>
                                            <tr>
                                                <td width="22%"><strong>Utility</strong></td>
                                                <td width="37%">Mainly using for any client-side activity for a web application, like possible attribute validation or refreshing the page in a specific interval or provide some dynamic changes in web pages without refreshing the page.</td>
                                                <td width="40%">It mainly used for accessing or performing any non-blocking operation of any operating system, like creating or executing a shell script or accessing any hardware-specific information or running any backend job.</td>
                                            </tr>
                                            <tr>
                                                <td width="22%"><strong>Running Engine</strong></td>
                                                <td width="37%">JavaScript running any engine like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome).</td>
                                                <td width="40%">Node JS only run in a V8 engine which mainly used by google chrome. And javascript program which will be written under this Node JS will be always run in V8 Engine.</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 mx-auto">
                        <div className="card">
                            <div className="card-header bg-info py-3">
                                <h4 className="text-white">Question: #4 How does NodeJS handle multiple requests at the same time?</h4>
                            </div>
                            <div className="card-body">
                                <p className='lead'>How does node handle multiple requests at the same time?
                                    How NodeJS handle multiple client requests? <strong>NodeJS receives multiple client requests and places them into EventQueue.</strong> NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;