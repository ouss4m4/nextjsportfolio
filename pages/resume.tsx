import React from 'react';
import Bar from '../components/Bar';
import { languages, tools } from '../data';

const resume = (props) => {
  return (
    <div className="px-6 py-2">
      {/* education & exp */}

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Computer Science Engineering
            </h5>
            <p className="font-semibold ">Academy of Tech (2017-2021)</p>
            <p className="my-3 ">
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
              dolor sit amet{' '}
            </p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Automation &and; Regulation
            </h5>
            <p className="font-semibold ">Academy of Tech (2017-2021)</p>
            <p className="my-3 ">
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
              dolor sit amet{' '}
            </p>
          </div>
        </div>
      </div>

      {/* Languages & tools */}

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {languages.map((l) => (
              <Bar data={l} key={l.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default resume;
