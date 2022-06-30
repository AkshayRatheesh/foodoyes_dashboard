function sidebar() {
    let side=document.querySelector(".sidebar");
    side.innerHTML=`
    <div class="left side-menu">
                <div class="slimscroll-menu" id="remove-scroll">

                    <!--- Sidemenu -->
                    <div id="sidebar-menu">
                        <!-- Left Menu Start -->
                        <ul class="metismenu" id="side-menu">
                            <li class="menu-title">Main</li>
                            <li>
                                <a href="index.html" class="waves-effect">
                                    <i class="material-symbols-outlined mdi">
                                    dashboard
                                    </i> <span> Dashboard </span>
                                </a>
                            </li>

                            <li>
                                <a href="order.html" class="waves-effect"><i class="material-symbols-outlined">
                                list_alt
                                </i><span> Orders <span class="float-right menu-arrow badge-primary fa-thin fa-plate-utensils float-right menu-arrow waves-effect"></span> </span></a>
                            </li>

                            <li>
                                <a href="menu.html" class="waves-effect"><i class="material-symbols-outlined">
                                room_service
                                </i> <span> Our Menu<span class="float-right menu-arrow"></span> </span> </a>
                                
                            </li>

                            <li>
                                <a href="foodtime.html" class="waves-effect"><i class="material-symbols-outlined">
                                timer
                                </i> <span> Food Time <span class="float-right menu-arrow"></span> </span> </a>
                                
                            </li>

                            <li>
                                <a href="deliverycharge.html" class="waves-effect"><i class="material-symbols-outlined">
                                directions_bike
                                </i><span> Delivery Charge <span class="float-right menu-arrow"></span> </span></a>

                                
                            </li>

                            <li>
                                <a href="timeslot.html" class="waves-effect"><i class="material-symbols-outlined">
                                hourglass_top
                                </i><span> Time Slot <span class="float-right menu-arrow"></span> </span></a>
                                
                            </li>

                            <li>
                                <a href="notification.html" class="waves-effect"><i class="material-symbols-outlined">
                                notifications_active
                                </i><span>  Notification<span class="badge badge-primary float-right">3</span></span></a>
                                
                            </li>

                            <li>
                                <a href="report.html" class="waves-effect"><i class="material-symbols-outlined">
                                monitoring
                                </i> <span> Report  <span class="float-right menu-arrow"></span></span> </a>
                                
                            </li>

                            <li>
                                <a href="offers.html" class="waves-effect"><i class="material-symbols-outlined">
                                percent
                                </i><span> Add Offers </span></a>
                            </li>

                            <li>
                                <a href="topselling.html" class="waves-effect"><i class="material-symbols-outlined">
                                sell
                                </i><span> Top selling  <span class="float-right menu-arrow"></span></span></a>
                                
                            </li>
                        </ul>

                    </div>
                    <!-- Sidebar -->
                    <div class="clearfix"></div>

                </div>
                <!-- Sidebar -left -->

            </div>
    
    `;
}
sidebar();