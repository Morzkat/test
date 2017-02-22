
 <!DOCTYPE html>
 <html lang="en">
   <head>
     <meta charset="utf-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1">
     <title>Tarea 5</title>

     <style media="screen">
     table
     {
         font-family: arial, sans-serif;
         border-collapse: collapse;
         width: 100%;
         right: auto;
         background-color: #dddddd;
     }

     td, th {
         border: 1px solid #dddddd;
         text-align: left;
         padding: 10px;
     }

     tr:nth-child(even) {
         background-color: #dddddd;

     }

     body
     {
       background-image: url("img/0.jpg");
       background-size: cover;
       background-repeat: no-repeat;
     }

     </style>

     <script src="js/webcam" charset="utf-8"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js" charset="utf-8"></script>

     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
     <!--<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">-->

     <!--[if lt IE 9]>
       <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.2/html5shiv.js"></script>
       <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
     <![endif]-->

   </head>

   <body>
     <div class="">


          <label for="Placa">Cedula</label>
          <th> <input type="text" id ="txtCedula" placeholder="Cedula"> </th> </p>

          <th>  <label for="Marca"> Nombre</label> </th>
          <th>  <input type="text" id ="txtName" placeholder="Nombre"> </th></p>

         <label for="Modelo">
         Apellido</label>
         </th>
          <input type="text" id ="txtL_Name" placeholder="Apellido"></p>

          <label for="Color">
          Telefono</label>
          <th> <input type="text" placeholder="Tel" id ="txtEXP"> </th></p>

         <button type="button" class="btn btn-primary" name="button" id= "btn_save" onClick="add_Master()">Guardar</button>
          <button type="button" class="btn btn-primary" name="button" id= "btn_clear" onClick="call_Clear()">Limpiar</button></p>

          </div>

          <table>
            <thead>
              <tr>

               <th>Cedula</th>
               <th>Nombre</th>
               <th>Apellido</th>
               <th>Tel</th>
               <th>Foto</th>
               <th>Accion</th>


              </tr>
            </thead>

            <tbody id = "tbMasters">



            </tbody>
          </table>

          <video id="video" width="340" height="180" autoplay></video>
          <canvas id="canvas" width="340" height="180"></canvas>

  <script type="text/javascript">

    </script>

   <script type="text/javascript" src = "JS/actions.js"></script>


     <!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
     <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>-->
   </body>
 </html>
