import axios from 'axios';
function Form() {
  const handle = async (e) =>
  {
    e.preventDefault()
    const url = "https://jsonplaceholder.typicode.com/posts";
    const bien = {
      userId:"aaa",
      id:"101",
      title:"vvv",
      body:"aaaaa"
    }
      axios.post(url,(bien))
      .then(response=>{console.log(response.data)});
  }
  return (
    <div>
        <button onClick={handle}>ban vao day</button>
    </div>
  );
}
export default Form;