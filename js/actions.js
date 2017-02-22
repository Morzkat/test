"use strict";

var masters = [];
var master = [];
var pkms = [];
var path_Img;

var table =  __('tbMasters');

var index_master = -1;

clear();

function __(id)
{
    return document.getElementById(id);
}

function add_Master()
{

  master.push(__('txtCedula').value);
  master.push(__('txtName').value);
  master.push(__('txtL_Name').value);
  master.push(__('txtEXP').value);

  var master_OK = true;
  for (var i = 0; i < master.length; i++)
  {
    if (master[i] == "")
    {
        master_OK  = false;
    }
  }

  if (master_OK )
  {

    if (index_master === -1)
    {
        path_Img = "img/images.jpg";
        master.push(path_Img);
        masters.push(master);
    }

    else
    {
        console.log("alter");
        master.push(path_Img);

        masters.splice(index_master, 1, master);
    }

    var data = JSON.stringify(masters);
    localStorage.setItem('datoz', data);

    //functions
    show_Masters();
    clear();

  }

  else
  {
      alert('Datos llenos');
  }

}

function show_Masters()
{
    var table =  __('tbMasters');
    table.innerHTML = "";

    for (var i = 0; i < masters.length; i++)
    {
      var tr = document.createElement('TR');
      var master = masters[i];

      var path = masters[i][4];
      console.log(path[4]);

      for (var x = 0; x < master.length - 1; x++)
      {
        var data;
        data = master[x];

        var td = document.createElement('TD');
        var td_0 = document.createElement('TD');

        var btn_delete = document.createElement("SPAN");
        var btn_modif = document.createElement("SPAN");
        var btn_img = document.createElement("SPAN");

        var img = document.createElement("IMG");

        btn_modif.innerHTML = '<button class="btn btn-warning" onclick="update_master('+ i +')">Modidificar??</button>';
        btn_delete.innerHTML = '<button class="btn btn-danger" onclick="delete_master(this)">Borrar</button>';
        btn_img.innerHTML = '<button class="btn btn-primary" onclick="take_IMG('+ i +')">Foto??</button>';

        img.src = path;
        img.width = "100";
        img.height = "80";

        td.innerHTML = data;
        tr.appendChild(td);

      }

        td_0.appendChild(img);
        tr.appendChild(td_0);

        tr.appendChild(btn_img);
        tr.appendChild(btn_modif);
        tr.appendChild(btn_delete);

        table.appendChild(tr);
    }

}

function update_master(index)
{

        index_master = index;
        var masterToModif = masters[index];

      __('txtCedula').value = masterToModif[0];
      __('txtName').value = masterToModif[1];
      __('txtL_Name').value = masterToModif[2];
      __('txtEXP').value = masterToModif[3];

      __('btn_save').innerHTML = 'Actualizar';

}

function delete_master(index)
{
  table.deleteRow(index);
  masters.splice(index,1);

  localStorage.datoz = JSON.stringify(masters);
}

    var data = localStorage.getItem('datoz');
    if (data != null)
    {
        masters = JSON.parse(data);
        show_Masters();
    }


    function clear()
    {
        var fields = document.getElementsByTagName('input');

        for (var i = 0; i < fields.length; i++)
        {
          fields[i].value ="";
        }

        __('btn_save').innerHTML = 'Guardar';

       master = [];
       index_master = -1;

    }


    function call_Clear()
    {
        clear();
    }

    function p()
    {

        console.log("asf");
    }

    var img_Data;
    var video = document.getElementById('video');

    // Get access to the camera!
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  // Not adding `{ audio: true }` since we only want video now
navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
video.src = window.URL.createObjectURL(stream);
video.play();
    });
}

// Elements for taking the snapshot
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var video = document.getElementById('video');

// Trigger photo take
function take_IMG (index)

{
  index_master = index;
  context.drawImage(video, 0, 0, 240, 180);

  img_Data = canvas.toDataURL();

  path_Img = img_Data;

  show_Masters();
  update_master(index);
}
