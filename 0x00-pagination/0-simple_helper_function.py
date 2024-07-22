#!/usr/bin/env python3
"""
Contains a simple help function
"""


def index_range(page: int, page_size: int) -> tuple:
    """
    The function returns a tuple of page index
    rtype: tuple
    """

    max_index = page * page_size
    min_index = (page - 1) * page_size

    return min_index, max_index
