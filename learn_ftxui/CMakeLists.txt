cmake_minimum_required(VERSION 3.16)

project(learn_ftxui)
set(CMAKE_CXX_STANDARD 20)

find_package(ftxui CONFIG REQUIRED)

add_executable(main main.cpp)
target_link_libraries(main PRIVATE ftxui::screen ftxui::dom ftxui::component)