
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useTitle from "../../Hooks/useTitle";
const Blog = () => {
  useTitle("Blog");
  return (
    <div className="w-10/12 mx-auto my-12">
      <h1 className="font-bold text-5xl text-center block">
        Answering Questions
      </h1>
      <Tabs>
        <TabList>
          <Tab>
            <h1 className="font-bold text-2xl px-2">1</h1>
          </Tab>
          <Tab>
            <h1 className="font-bold text-2xl px-2">2</h1>
          </Tab>
          <Tab>
            <h1 className="font-bold text-2xl px-2">3</h1>
          </Tab>
          <Tab>
            <h1 className="font-bold text-2xl px-2">4</h1>
          </Tab>
        </TabList>
        <TabPanel>
          <h2 className="font-bold text-3xl">
            Ques:- What is an access token and refresh token? How do they work
            and where should we store them on the client-side?
          </h2>
          <p className="my-4">
            Access tokens and refresh tokens are both types of tokens used in
            OAuth 2.0, an open standard for authorization. OAuth 2.0 allows
            users to grant third-party applications access to their protected
            resources without giving away their username and password.
          </p>
          <h4 className="font-bold text-lg">How do they work?</h4>
          <p className="my-2">
            
            When a user logs in to a third-party application, the application
            first requests an authorization code from the authorization server.
            The authorization server then redirects the user to the
            application login page. The user enters their username and
            password, and the application submits the credentials to the
            authorization server. The authorization server then validates the
            credentials and issues an access token and refresh token to the
            application.
          </p>
          <p>
            The application then stores the access token and refresh token
            securely. The access token is used to make authenticated requests to
            the resource server. The refresh token is used to obtain a new
            access token when the old one expires.
          </p>
          <h4 className="font-bold text-lg my-4">
            Where should we store them on the client-side?
          </h4>
          Access tokens and refresh tokens should be stored securely on the
          client application side. The best place to store them depends on the
          specific application. Some possible options include:
          <ul className="font-bold mx-8 my-8 list-disc">
            <li className="">In a database</li>
            <li>In a file</li>
            <li>In the browser local storage</li>
          </ul>
          <p>
            It is important to note that access tokens and refresh tokens should
            be encrypted when they are stored. This will help to protect them
            from unauthorized access.
          </p>
        </TabPanel>
        <TabPanel>
          <h2 className="font-bold text-3xl">
            Ques:- Compare SQL and NoSQL databases?
          </h2>
          <p className="my-4">
            SQL and NoSQL are two different types of database management systems
            (DBMS). SQL databases are relational, meaning that data is stored in
            tables with rows and columns. NoSQL databases are non-relational,
            meaning that data can be stored in a variety of formats, such as
            key-value pairs, documents, or graphs.
          </p>
        </TabPanel>
        <TabPanel>
          <h2 className="font-bold text-3xl">
            Ques:- What is express js? What is Nest JS?
          </h2>
          <p className="my-4">
            Express.js and NestJS are both Node.js frameworks that are used to
            build web applications. Express.js is a lightweight framework that
            provides a minimal set of features, while NestJS is a more robust
            framework that provides a number of features, such as dependency
            injection, routing, and testing.
          </p>
          <h4 className="font-bold text-lg mb-2 mt-4">Express.js</h4>
          

<p> Express.js is a minimal framework that provides a routing layer and a few other features. It is a popular choice for building simple web applications. Express.js is easy to learn and use, and it is well-documented.</p>

<h4 className="font-bold text-lg mb-2 mt-4">NestJS</h4>

<p> NestJS is a more robust framework that provides a number of features, such as dependency injection, routing, and testing. It is a popular choice for building large and complex web applications. NestJS is built on top of Express.js, so it inherits Express.jss simplicity and ease of use.</p>
        </TabPanel>
        
        <TabPanel>
          <h2 className="font-bold text-3xl">
            Ques:- What is MongoDB aggregate and how does it work?
          </h2>
          <p className="my-4">MongoDB aggregate is a feature that allows you to perform complex operations on data stored in MongoDB collections. Aggregate operations are performed using a pipeline of stages, where each stage performs an operation on the data and passes the results to the next stage. </p>

          <h4 className="font-bold text-lg">The following are some of the most common aggregate operations:</h4>
          
          <ul className="mx-8 my-8 list-disc">
            <li className=""><b className="font-bold">$match: </b> This stage filters the data by applying a condition to the documents.</li>
            <li className=""><b className="font-bold">$group: </b>This stage groups the data by a specified field and calculates aggregate values for the group.</li>
            <li className=""><b className="font-bold">$project: </b>This stage projects the data by selecting specific fields and transforming the data.</li>
            <li className=""><b className="font-bold">$sort: </b>This stage sorts the data by a specified field.</li>
            <li className=""><b className="font-bold">$limit: </b>This stage limits the number of documents returned.</li>
          </ul>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Blog;
