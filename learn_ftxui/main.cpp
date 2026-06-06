#include <iostream>
#include <string>
#include <vector>

#include <ftxui/dom/elements.hpp>
#include <ftxui/screen/screen.hpp>
#include <ftxui/component/screen_interactive.hpp>
#include <ftxui/component/component.hpp>

using namespace std;
using namespace ftxui;

int main()
{
    system("clear");
    string header_1 = "███████╗██╗      ██████╗ ██╗    ██╗██╗  ██╗ ██████╗  ██████╗ ██╗  ██╗";
    string header_2 = "██╔════╝██║     ██╔═══██╗██║    ██║██║  ██║██╔═══██╗██╔═══██╗██║ ██╔╝";
    string header_3 = "█████╗  ██║     ██║   ██║██║ █╗ ██║███████║██║   ██║██║   ██║█████╔╝ ";
    string header_4 = "██╔══╝  ██║     ██║   ██║██║███╗██║██╔══██║██║   ██║██║   ██║██╔═██╗ ";
    string header_5 = "██║     ███████╗╚██████╔╝╚███╔███╔╝██║  ██║╚██████╔╝╚██████╔╝██║  ██╗";
    string header_6 = "╚═╝     ╚══════╝ ╚═════╝  ╚══╝╚══╝ ╚═╝  ╚═╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝                                                            ";
 
    auto header_element = vbox({
        text(header_1) | bold,
        text(header_2) | bold,
        text(header_3) | bold,
        text(header_4) | bold,
        text(header_5) | bold,
        text(header_6) | bold,
    });    

    string instance_text_buffer = "";
    string path_text_buffer = "";
    auto in_text_input = Input(&instance_text_buffer, "Enter the watch instance name... ");
    auto pt_text_input = Input(&path_text_buffer, "Enter the watch instance path... ");

    string status_message = "";
    auto confirm_button = Button("Confirm", [&]() {
        if (instance_text_buffer.empty() || path_text_buffer.empty()) {
            status_message = "Please enter the watch instance name and path";
            return;
        } else {
            status_message = "Watch instance created";
            return;
        }
    });

    auto container = Container::Vertical({
        in_text_input,
        pt_text_input,
        confirm_button,
    });

    auto screen = ScreenInteractive::TerminalOutput();
    auto main = Renderer(container, [&]() {
        Element st_msg;
        if(status_message.rfind("Watch instance created", 0) == 0){
            st_msg = text(status_message) | center | color(Color::Green);
        }else {
            st_msg = text(status_message) | center | color(Color::Red);
        }
        return vbox({
            header_element | hcenter | color(Color::Yellow),
            text("=== FLOWHOOK v0.0.1 ===") | bold | center | color(Color::Blue),
            separator(),
            window(text("Instance Name"), in_text_input->Render()),
            window(text("Path"), pt_text_input->Render()),
            separator(),
            confirm_button->Render(),
            separator(),
            st_msg,
        }) | border | size(HEIGHT, EQUAL, 24) | size(WIDTH, LESS_THAN, 70);
    });
    screen.Loop(main);
    return 0;
}