    var initFullCalendar = function (events) {
        $calendar = $('#fullCalendar');
        today = new Date();
        y = today.getFullYear();
        m = today.getMonth();
        d = today.getDate();

        $calendar.fullCalendar({
            height: 350,
            viewRender: function (view, element) {
                // We make sure that we activate the perfect scrollbar when the view isn't on Month
                // if (view.name != 'month') {
                //     $(element).find('.fc-scroller').perfectScrollbar();
                // }
            },
            header: {
                left: 'title',
                center: 'agendaWeek,month',
                right: 'prev,next,today'
            },
            defaultDate: today,
            selectable: false,
            selectHelper: true,
            views: {
                month: { // name of view
                    titleFormat: 'MMMM YYYY'
                    // other view-specific options here
                },
                week: {
                    titleFormat: " MMMM D YYYY"
                },
                day: {
                    titleFormat: 'D MMM, YYYY'
                }
            },

            editable: false,
            eventLimit: true, // allow "more" link when too many events
            // color classes: [ event-blue | event-azure | event-green | event-orange | event-red ]
            events:events
            // events:
            //     [
            //
            //         {
            //             id: 999,
            //             title: 'Clock In',
            //             start: new Date(y, m, d - 4, 6, 0),
            //             allDay: false,
            //             className: 'event-rose'
            //         },
            //         {
            //             id: 999,
            //             title: 'Repeating Event',
            //             start: new Date(y, m, d + 3, 6, 0),
            //             allDay: false,
            //             className: 'event-rose'
            //         },
            //         {
            //             title: 'Meeting',
            //             start: new Date(y, m, d - 1, 10, 30),
            //             allDay: false,
            //             className: 'event-green'
            //         },
            //         {
            //             title: 'Lunch',
            //             start: new Date(y, m, d + 7, 12, 0),
            //             end: new Date(y, m, d + 7, 14, 0),
            //             allDay: false,
            //             className: 'event-red'
            //         },
            //         {
            //             title: 'Md-pro Launch',
            //             start: new Date(y, m, d - 2, 12, 0),
            //             allDay: true,
            //             className: 'event-azure'
            //         },
            //         {
            //             title: 'Birthday Party',
            //             start: new Date(y, m, d + 1, 19, 0),
            //             end: new Date(y, m, d + 1, 22, 30),
            //             allDay: false,
            //             className: 'event-azure'
            //         },
            //         {
            //             title: 'Click for Creative Tim',
            //             start: new Date(y, m, 21),
            //             end: new Date(y, m, 22),
            //             url: 'http://www.creative-tim.com/',
            //             className: 'event-orange'
            //         },
            //         {
            //             title: 'Click for Google',
            //             start: new Date(y, m, 21),
            //             end: new Date(y, m, 22),
            //             url: 'http://www.creative-tim.com/',
            //             className: 'event-orange'
            //         }
            //     ]
        });
    }
    var openModal = function (modalIid) {
        $(modalIid).modal('show');
    }

    var hideModal = function (modalId) {
        $(modalId).modal('hide');
    }

