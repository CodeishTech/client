import { useState, useEffect } from 'react';
import { Retrieve_All_Categories } from '../../services/category';
import { Retrieve_Subjects_By_Category } from '../../services/subject';
import { Link } from 'react-router-dom';
import { Retrive_All_Articles } from '../../services/article';
import { containedButton } from '../../styles/style';

export default function AllArticles() {

  // const { cat } = useParams();

  const [category, setCategory]=useState("");
  const [categories, setCategories]=useState("");
  const [subject, setSubject]=useState("");
  const [allArticles, setAllArticles]=useState("");
  const [subjects, setSubjects]=useState("");
  const [searchQuery, setSearchQuery]=useState("");

  useEffect(() => {
    
    Retrieve_All_Categories()
    .then(result => {
      setCategories(result);
    })

    if(category){
      Retrieve_Subjects_By_Category(category)
      .then(result => {
        setSubjects(result);
      })
    }

    Retrive_All_Articles()
    .then(result => {
      setAllArticles(result);
      console.log(result);
    })

  },[category]);

  return (
    <>
      <div className="flex flex-wrap dark:bg-gray-900">
        <div className="md:flex w-full justify-center mt-6 px-4 md:px-24 md:space-x-14">
          <div className="mb-4 w-full">
            <select className="shadow border rounded w-full py-2 px-3 text-grey-darker bg-white" id="category" aria-label="Default select example" value={category} onChange={(e)=>setCategory(e.target.value)}>
              <option selected>Choose Coding Platform</option>
              {categories && categories.map((option) => (
                  <option value={option.category}>{option.category}</option>
              ))}
            </select>
          </div>
          <div className="mb-4 w-full">
            {subjects ?
              <select className="shadow border rounded w-full py-2 px-3 text-grey-darker bg-white" id="category" aria-label="Default select example" value={subject} onChange={(e)=>setSubject(e.target.value)}>
                <option selected>Choose Contest</option>
                {subjects.map((option) => (
                    <option value={option.subject}>{option.subject}</option>
                ))}
              </select>
              :
              <select className="shadow border rounded w-full py-2 px-3 text-grey-darker bg-white" id="category" aria-label="Default select example" value={subject} onChange={(e)=>setSubject(e.target.value)}>
                <option selected>Choose Contest</option>
              </select>
            }
          </div>
        </div>
        <div className="md:flex w-full justify-center mt-1 px-4 md:px-24 md:space-x-14">
          <div className="mb-4 w-full">
            <input className="shadow border rounded w-full py-1.5 px-3 text-grey-darker" id="username" type="text" placeholder="search a problem by name" onChange={(e)=>setSearchQuery(e.target.value)} />
          </div>
        </div>
        <div className="w-full flex-wrap md:flex md:justify-between mt-1 px-4 md:px-16">
          {allArticles && 
          allArticles.map((article) => {
            if(article.category.toUpperCase().search(category.toUpperCase())!==-1 || article.subject.toUpperCase().search(subject.toUpperCase())!==-1 || article.title.toUpperCase().search(searchQuery.toUpperCase())!==-1){
            return (
              <div className="mb-4 md:w-6/12 md:px-8 py-2">
                <div className="p-4 w-full text-center bg-white rounded-lg border shadow-md sm:px-4 sm:py-4 dark:bg-gray-800 dark:border-gray-700">
                    <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">{article.title}</h5>
                    <div className="md:flex justify-between">
                      <div>
                        <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{article.subject}</h5>
                      </div>
                      <div>
                        <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{article.category}</h5>
                      </div>
                    </div>
                    <div className="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                      <Link to="/"><button className={containedButton+" mt-2 w-full"}>View Solution</button></Link>
                    </div>
                </div>
              </div>
            )}
            else{
              return null;
            }
          }
          )}
        </div>
      </div>
    </>
  );
}