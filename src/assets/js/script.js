import * as API from "../../constant/api";

const token = JSON.parse(localStorage.getItem("auth"));

export async function handleLogin(data) {
  let response;
  let error;

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("email", data.email);
  urlencoded.append("password", data.password);
  urlencoded.append("role", "team_sbr");

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  try {
    const res = await fetch(API.LOG_IN, requestOptions);
    response = await res.json();
    console.log(response, "follow");
    if (response.status) {
      localStorage.setItem("auth", JSON.stringify(response.token));
      localStorage.setItem(
        "user",
        JSON.stringify({ name: "praveen", email: "praveen.k@project42labs.com" })
      );
    }
  } catch (err) {
    console.log(err);
    error = await err;
  }
  return { response, error };
}

export async function getTeams() {
  let response;
  let error;

  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  try {
    const res = await fetch(API.GET_TEAM, requestOptions);
    response = await res.json();
    // console.log(response, "follow");
  } catch (err) {
    console.log(err);
    error = err;
  }
  return { response, error };
}

export async function addTeamMembers(data) {
  let response;
  let error;

  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("email", data.email);
  urlencoded.append("name", data.name);
  urlencoded.append("mobile_number", data.phoneNo);
  urlencoded.append("role", data.role);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  try {
    const res = await fetch(API.ADD_TEAM_MEMBER, requestOptions);
    response = await res.json();
    console.log(response);
  } catch (err) {
    console.log(err);
    error = await err;
  }
  return { response, error };
}

export async function removeMember(id) {
  let response;
  let error;

  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow",
  };

  try {
    const res = await fetch(`${API.REMOVE_MEMBER}/${id}`, requestOptions);
    response = await res.json();
    // console.log(response, "follow");
  } catch (err) {
    console.log(err);
    error = await err;
  }
  return { response, error };
}

export async function getTickets() {
  let response;
  let error;

  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  try {
    const res = await fetch(API.GET_TICKET, requestOptions);
    response = await res.json();
    // console.log(response, "follow");
  } catch (err) {
    console.log(err);
    error = err;
  }
  return { response, error };
}

export async function commentOnTicket(data){
  let response;
  let error;

  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("ticket_id", data.id);
  urlencoded.append("ticket_comment", data.comment);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  try {
    const res = await fetch(API.COMMENT_ON_TICKET, requestOptions);
    response = await res.json();
    console.log(response, "follow");
  } catch (err) {
    console.log(err);
    error = await err;
  }
  return { response, error };
}

export async function getCommentsOfTicket(id){
  let response;
  let error;
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  try {
    const res = await fetch(`${API.GET_COMMENTS_OF_TICKET}/${id}/10/1`, requestOptions);
    response = await res.json();
    console.log(response, "follow");
  } catch (err) {
    console.log(err);
    error = err;
  }
  return { response, error };
}

export async function changeTicketStatus(data){
  let response;
  let error;

  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("ticket_id", data.id);
  urlencoded.append("ticket_status", data.status);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  try {
    const res = await fetch(API.CHANGE_TICKET_STATUS, requestOptions);
    response = await res.json();
    console.log(response, "follow");
  } catch (err) {
    console.log(err);
    error = await err;
  }
  return { response, error };
}

export async function createTicket(){}

export async function getUsers(){
  let response;
  let error;

  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  try {
    const res = await fetch(API.GET_USERS, requestOptions);
    response = await res.json();
    console.log(response, "follow");
  } catch (err) {
    console.log(err);
    error = err;
  }
  return { response, error };
}

export async function profileImage(data) {
  let response;
  let error;
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  const formdata = new FormData();
  formdata.append("file", data.files[0], "[PROXY]");

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  try {
    const res = await fetch(API.CHANGE_TICKET_STATUS, requestOptions);
    response = await res.json();
    console.log(response, "follow");
  } catch (err) {
    console.log(err);
    error = await err;
  }
  return { response, error };
}