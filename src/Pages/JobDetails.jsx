import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Pageheader from "../components/Pageheader";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaBuildingUser } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { SiLevelsdotfyi } from "react-icons/si";
import { IoIosTime } from "react-icons/io";
import { MdOutlineLaptopChromebook } from "react-icons/md";
import RecJobs from "../components/RecJobs";
import Card from "../components/Card";
import Jobs from "./Jobs";
import Navbar from "../components/Navbar";
import { IoArrowBackOutline } from "react-icons/io5";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/all-jobs/${id}`)
      .then((res) => res.json())
      .then((data) => setJob(data));
  }, []);

  const handleApply = async () => {
    const { value: url } = await Swal.fire({
      input: "url",
      inputLabel: "URL address",
      inputPlaceholder: "Enter the URL",
    });
    if (url) {
      Swal.fire(`Entered URL: ${url}`);
    }
  };

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3000/all-jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setIsLoading(false);
      });
  }, []);

  // console.log(jobs)

  // handle input change
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // filter jobs by title
  const filteredItems = jobs.filter(
    (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------------------Radio Filtering ---------------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------button based filtering ----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  // calculate the index range
  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };
  };

  //function for the next page
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  //function for the previos page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  //main function
  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;

    // filtering Inputs items
    if (query) {
      filteredJobs = filteredItems;
    }

    //category filtering
    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({
          jobLocation,
          maxPrice,
          experienceLevel,
          salaryType,
          employmentType,
          postingDate,
        }) =>
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) <= parseInt(selected) ||
          postingDate >= selected ||
          experienceLevel.toLowerCase() === selected.toLowerCase() ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase()
      );
      console.log(filteredJobs);
    }

    // slice the data  based on current page
    const { startIndex, endIndex } = calculatePageRange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex);
    return filteredJobs.map((data, i) => <Card key={i} data={data} />);
  };

  const result = filteredData(jobs, selectedCategory, query);

  return (
    <div>
      <Navbar />

      {/* main content */}
      <div className="bg-[#FAFAFA] md:grid grid-cols-6 gap-8 lg:px-24 px-4 py-12 mt-10  ">
        {/* <Pageheader tittle={"Single Job Page"} path={"Single Job"} /> */}

        {/* left */}

        <div className="bg-[#FAFAFA]">
          {/* <Link to="/home">
            <IoArrowBackOutline
              className="my-5"
              style={{ fontSize: "1.5em" }}
            />
          </Link> */}
          <img className="w-36  " src={job.companyLogo} alt="" />
          <div className="flex items-center mt-10">
            <MdOutlineLaptopChromebook className="ml-1" />
            <h1 className="ml-1">{job.description}</h1>
          </div>
        </div>

        {/* center card */}

        <div className=" bg-white p-4 rounded col-span-2 ">
          <h1 className="mt-5 text-2xl">{job.companyName}</h1>
          <div className="flex items-center">
            <FaLocationDot className="ml-1" />
            <h1 className="ml-1">Company Location : {job.jobLocation}</h1>
          </div>

          <div className="flex items-center mt-5 mb-2">
            <BsCurrencyDollar className=" ml-1" />
            <h1 className="ml-1">
              {job.minPrice} - {job.maxPrice} {job.salaryType}
            </h1>
          </div>
          <div className="flex items-center mb-2">
            <FaBuildingUser className="ml-1" />
            <h1 className="ml-1">{job.jobTitle}</h1>
          </div>

          <div className="flex items-center mb-2">
            <SiLevelsdotfyi className="ml-1" />
            <h1 className="ml-1">Experience Level: {job.experienceLevel}</h1>
          </div>
          <div className="flex items-center mb-2">
            <IoIosTime className="ml-1" />
            <h1 className="ml-1">Employment Type: {job.employmentType}</h1>
          </div>

          <div className="flex items-center mb-2">
            <FaCalendarAlt className="ml-1" />
            <h1 className="ml-1">Posted on : {job.postingDate}</h1>
          </div>

          {/* Displaying skills with the same styling as in Card component */}
          {job.skills && (
            <div className="text-primary/70 text-base flex flex-wrap gap-2 mb-2">
              <MdOutlineLaptopChromebook />
              <span>Skills:</span>
              {job.skills.map((skill) => (
                <span
                  key={skill.value}
                  className="bg-gray-200 px-2 py-1 rounded-md"
                >
                  {skill.label}
                </span>
              ))}
            </div>
          )}

          {/* <h2 className="text-sm font-light">Id Job Details: {id}</h2> */}

          <button
            className="bg-blue px-8 py-2 text-center mx-10 mt-5 text-white rounded-md"
            onClick={handleApply}
          >
            Apply Now
          </button>
        </div>

        {/* right */}
        <div className="col-span-3">
          <div className="bg-white p-4 max-h-[500px] overflow-y-scroll">
            {isLoading ? (
              <p className="font-medium">Loading .....</p>
            ) : result.length > 0 ? (
              <Jobs result={result} />
            ) : (
              <>
                <h3 className="text-lg font-bold mb-2 ">
                  {result.length} Jobs
                </h3>
                <p>No data found!</p>
              </>
            )}
            {result.length > 0 ? (
              <div className="flex justify-center mt-4 space-x-8">
                <button
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className="hover:underline"
                >
                  Previous
                </button>
                <span className="mx-2">
                  Page {currentPage} of{" "}
                  {Math.ceil(filteredItems.length / itemsPerPage)}
                </span>
                <button
                  onClick={nextPage}
                  disabled={
                    currentPage ===
                    Math.ceil(filteredItems.length / itemsPerPage)
                  }
                  className="hover:underline"
                >
                  Next Button
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
